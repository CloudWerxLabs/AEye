document.addEventListener('DOMContentLoaded', () => {
  const apiKeyInput = document.getElementById('api-key');
  const saveApiKeyButton = document.getElementById('save-api-key');
  const userInput = document.getElementById('user-input');
  const sendMessageButton = document.getElementById('send-message');
  const chatResponses = document.getElementById('chat-responses');

  // Load saved API key
  chrome.storage.sync.get(['grokApiKey'], (result) => {
    if (result.grokApiKey) {
      apiKeyInput.value = result.grokApiKey;
    }
  });

  // Save API key
  saveApiKeyButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
      chrome.storage.sync.set({grokApiKey: apiKey}, () => {
        alert('API Key saved successfully!');
      });
    }
  });

  // Send message to Grok AI
  sendMessageButton.addEventListener('click', async () => {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessageToChatUI(message, 'user');

    // Retrieve API key
    const { grokApiKey } = await chrome.storage.sync.get(['grokApiKey']);
    if (!grokApiKey) {
      addMessageToChatUI('Please set your Grok API key first.', 'ai');
      return;
    }

    try {
      const response = await fetchGrokResponse(message, grokApiKey);
      addMessageToChatUI(response, 'ai');
    } catch (error) {
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
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'grok-1',
        messages: [{ role: 'user', content: message }]
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch response from Grok AI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  }
});
