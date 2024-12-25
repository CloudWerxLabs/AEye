// API Key Management
let apiKey = '';

// DOM Elements
const settingsIcon = document.querySelector('.settings-icon');
const settingsModal = document.getElementById('settings-modal');
const closeModal = document.querySelector('.close-modal');
const modalApiKeyInput = document.getElementById('modal-api-key');
const saveModalApiKey = document.getElementById('save-modal-api-key');
const modalApiKeyStatus = document.getElementById('modal-api-key-status');

const userInput = document.getElementById('user-input');
const sendMessageBtn = document.getElementById('send-message');
const chatResponses = document.getElementById('chat-responses');

// Logging function
function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  console[type](`[${timestamp}] ${message}`);
}

// Chat History Management
function saveMessage(message, type) {
  try {
    chrome.storage.local.get(['chatHistory'], (result) => {
      const chatHistory = result.chatHistory || [];
      chatHistory.push({ message, type, timestamp: new Date().toISOString() });
      
      // Limit chat history to last 100 messages to prevent excessive storage
      const trimmedHistory = chatHistory.slice(-100);
      
      chrome.storage.local.set({ chatHistory: trimmedHistory }, () => {
        log('Message saved to chat history');
      });
    });
  } catch (error) {
    log(`Error saving message: ${error}`, 'error');
  }
}

function loadChatHistory() {
  try {
    chrome.storage.local.get(['chatHistory'], (result) => {
      const chatHistory = result.chatHistory || [];
      
      // Clear existing chat responses
      chatResponses.innerHTML = '';
      
      // Render saved messages
      chatHistory.forEach(item => {
        const messageEl = document.createElement('div');
        messageEl.classList.add('message', `${item.type}-message`);
        messageEl.textContent = item.message;
        chatResponses.appendChild(messageEl);
      });
    });
  } catch (error) {
    log(`Error loading chat history: ${error}`, 'error');
  }
}

// Scroll Position Management
function saveScrollPosition() {
  if (chatResponses) {
    chrome.storage.local.set({ 
      chatScrollPosition: chatResponses.scrollTop,
      chatScrollHeight: chatResponses.scrollHeight
    }, () => {
      log(`Saved scroll position: ${chatResponses.scrollTop}`);
    });
  }
}

function restoreScrollPosition() {
  if (chatResponses) {
    // Always scroll to the bottom (newest message)
    chatResponses.scrollTop = chatResponses.scrollHeight;
    log('Scrolled to newest message');
  }
}

// Load chat history when popup is opened
document.addEventListener('DOMContentLoaded', () => {
  loadChatHistory();
  
  // Restore scroll position (which now always goes to bottom)
  restoreScrollPosition();
});

// Send Message Functionality
function sendMessage() {
  const message = userInput.value.trim();
  
  if (!message) return;

  // Save user message to history
  saveMessage(message, 'user');

  // Add user message to chat
  const userMessageEl = document.createElement('div');
  userMessageEl.classList.add('message', 'user-message');
  userMessageEl.textContent = message;
  chatResponses.appendChild(userMessageEl);

  // Always scroll to bottom after sending a message
  chatResponses.scrollTop = chatResponses.scrollHeight;

  // Retrieve API Key before sending
  chrome.storage.sync.get(['grokApiKey'], (result) => {
    if (!result.grokApiKey) {
      const errorMessage = 'Please set your Grok API Key in Settings first!';
      log(errorMessage, 'warn');
      
      const errorMessageEl = document.createElement('div');
      errorMessageEl.classList.add('message', 'ai-message', 'error');
      errorMessageEl.textContent = errorMessage;
      chatResponses.appendChild(errorMessageEl);
      return;
    }

    // Call Grok API with updated endpoint and parameters
    fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${result.grokApiKey}`
      },
      body: JSON.stringify({
        model: "grok-2-1212", // Corrected model name from documentation
        messages: [
          {
            role: "system", 
            content: "You are a helpful AI assistant in a Chrome extension."
          },
          { 
            role: "user", 
            content: message 
          }
        ],
        max_tokens: 300, // Optional: limit response length
        temperature: 0.7, // Optional: control randomness
        stream: false // Disable streaming for simplicity
      })
    })
    .then(response => {
      log(`Response status: ${response.status}`);
      if (!response.ok) {
        return response.text().then(errorText => {
          // Try to parse the error JSON
          try {
            const errorJson = JSON.parse(errorText);
            throw new Error(`API Error: ${errorJson.error || errorText}`);
          } catch (parseError) {
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
          }
        });
      }
      return response.json();
    })
    .then(data => {
      log('API Response received');
      
      // Safely extract AI response
      const aiResponse = data.choices && data.choices[0] && data.choices[0].message 
        ? data.choices[0].message.content 
        : 'No response from Grok AI';
      
      // Save AI message to history
      saveMessage(aiResponse, 'ai');

      const aiMessageEl = document.createElement('div');
      aiMessageEl.classList.add('message', 'ai-message');
      aiMessageEl.textContent = aiResponse;
      chatResponses.appendChild(aiMessageEl);
      
      // Scroll to bottom
      chatResponses.scrollTop = chatResponses.scrollHeight;
    })
    .catch(error => {
      log(`Error processing request: ${error}`, 'error');
      
      const errorMessage = `Sorry, there was an error: ${error.message}`;
      
      // Save error message to history
      saveMessage(errorMessage, 'ai');

      const errorMessageEl = document.createElement('div');
      errorMessageEl.classList.add('message', 'ai-message', 'error');
      errorMessageEl.textContent = errorMessage;
      chatResponses.appendChild(errorMessageEl);
    });

    // Clear input
    userInput.value = '';
  });
}

// Send message on button click
sendMessageBtn.addEventListener('click', sendMessage);

// Send message on Enter, multiline on Ctrl+Enter
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (event.ctrlKey) {
      // Insert new line for Ctrl+Enter
      const start = event.target.selectionStart;
      const end = event.target.selectionEnd;
      const value = event.target.value;
      event.target.value = value.substring(0, start) + '\n' + value.substring(end);
      event.target.selectionStart = event.target.selectionEnd = start + 1;
      event.preventDefault(); // Prevent default Enter key behavior
    } else {
      // Send message on Enter
      event.preventDefault();
      sendMessage();
    }
  }
});

// Settings Modal Functionality
settingsIcon.addEventListener('click', () => {
  settingsModal.style.display = 'block';
  // Retrieve and pre-fill existing API key
  chrome.storage.sync.get(['grokApiKey'], (result) => {
    if (result.grokApiKey) {
      modalApiKeyInput.value = result.grokApiKey;
    }
  });
});

closeModal.addEventListener('click', () => {
  settingsModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === settingsModal) {
    settingsModal.style.display = 'none';
  }
});

// Save API Key from Modal
saveModalApiKey.addEventListener('click', () => {
  const newApiKey = modalApiKeyInput.value.trim();
  
  if (!newApiKey) {
    modalApiKeyStatus.textContent = 'API Key cannot be empty';
    modalApiKeyStatus.style.color = 'red';
    return;
  }

  // Save API Key to Chrome Storage
  chrome.storage.sync.set({grokApiKey: newApiKey}, () => {
    apiKey = newApiKey;
    modalApiKeyStatus.textContent = 'API Key saved successfully!';
    modalApiKeyStatus.style.color = 'green';
    
    // Optional: Hide modal after successful save
    setTimeout(() => {
      settingsModal.style.display = 'none';
    }, 1500);
  });
});

// Initialize by checking for existing API Key
chrome.storage.sync.get(['grokApiKey'], (result) => {
  if (result.grokApiKey) {
    apiKey = result.grokApiKey;
  }
});
