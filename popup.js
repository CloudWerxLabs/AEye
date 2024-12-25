document.addEventListener('DOMContentLoaded', () => {
  const apiKeyInput = document.getElementById('api-key');
  const saveApiKeyButton = document.getElementById('save-api-key');
  const userInput = document.getElementById('user-input');
  const sendMessageButton = document.getElementById('send-message');
  const chatResponses = document.getElementById('chat-responses');
  const apiKeyStatus = document.createElement('div');
  apiKeyStatus.id = 'api-key-status';
  saveApiKeyButton.parentNode.insertBefore(apiKeyStatus, saveApiKeyButton.nextSibling);

  // Load saved API key
  chrome.storage.sync.get(['grokApiKey'], (result) => {
    if (result.grokApiKey) {
      apiKeyInput.value = result.grokApiKey;
      apiKeyStatus.textContent = 'API Key loaded successfully';
      apiKeyStatus.style.color = 'green';
    }
  });

  // Save API key
  saveApiKeyButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
      chrome.storage.sync.set({grokApiKey: apiKey}, () => {
        apiKeyStatus.textContent = 'API Key saved successfully!';
        apiKeyStatus.style.color = 'green';
        console.log('API Key saved to chrome storage');
      });
    } else {
      apiKeyStatus.textContent = 'Please enter a valid API key';
      apiKeyStatus.style.color = 'red';
    }
  });

  // Send message to Grok AI
  sendMessageButton.addEventListener('click', async () => {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessageToChatUI(message, 'user');

    // Retrieve API key
    try {
      const { grokApiKey } = await new Promise((resolve, reject) => {
        chrome.storage.sync.get(['grokApiKey'], (result) => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve(result);
          }
        });
      });

      if (!grokApiKey) {
        throw new Error('No API key found. Please save your API key first.');
      }

      const response = await fetchGrokResponse(message, grokApiKey);
      addMessageToChatUI(response, 'ai');
    } catch (error) {
      console.error('Error:', error);
      addMessageToChatUI(`Error: ${error.message}`, 'ai');
    }

    // Clear input
    userInput.value = '';
  });

  function addMessageToChatUI(message, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${type}-message`);
    messageElement.textContent = message;
    chatResponses.appendChild(messageElement);
    chatResponses.scrollTop = chatResponses.scrollHeight;
  }

  async function fetchGrokResponse(message, apiKey) {
    try {
      const response = await fetch('https://api.x.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'grok-2-1212',
          messages: [{ role: 'user', content: message }]
        })
      });

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Detailed Grok API Error:', error);
      throw error;
    }
  }
});
