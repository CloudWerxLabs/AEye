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
const imageUpload = document.getElementById('image-upload');

let currentImage = null;

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
        if (item.type === 'user' && item.message.type === 'image') {
          messageEl.innerHTML = `
            <img src="${item.message.content}" alt="Uploaded image" class="image-preview">
            <div>Image uploaded successfully! Type your question about the image.</div>
          `;
        } else {
          messageEl.textContent = item.message;
        }
        chatResponses.appendChild(messageEl);
      });
    });
  } catch (error) {
    log(`Error loading chat history: ${error}`, 'error');
  }
}

// Scroll Position Management
function saveScrollPosition() {
  if (!chatResponses) return;
  
  const scrollData = {
    scrollTop: chatResponses.scrollTop,
    scrollHeight: chatResponses.scrollHeight,
    clientHeight: chatResponses.clientHeight,
    timestamp: Date.now()
  };
  
  chrome.storage.local.set({ chatScrollPosition: scrollData }, () => {
    log(`Saved scroll position: ${JSON.stringify(scrollData)}`);
  });
}

function restoreScrollPosition(immediate = false) {
  if (!chatResponses) return;
  
  chrome.storage.local.get(['chatScrollPosition', 'chatHistory'], (result) => {
    if (!result.chatScrollPosition) {
      chatResponses.scrollTop = chatResponses.scrollHeight;
      return;
    }

    const { scrollTop, scrollHeight, clientHeight, timestamp } = result.chatScrollPosition;
    const currentHistory = result.chatHistory || [];
    
    // Calculate if we were at the bottom
    const wasAtBottom = (scrollTop + clientHeight >= scrollHeight - 10);
    
    // Check for new messages
    const hasNewMessages = currentHistory.length > 0 && 
      timestamp < new Date(currentHistory[currentHistory.length - 1].timestamp).getTime();

    if (wasAtBottom || hasNewMessages) {
      chatResponses.scrollTop = chatResponses.scrollHeight;
    } else {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        const scrollRatio = scrollTop / scrollHeight;
        chatResponses.scrollTop = Math.floor(chatResponses.scrollHeight * scrollRatio);
      }, immediate ? 0 : 100);
    }
  });
}

// Initialize scroll handling
document.addEventListener('DOMContentLoaded', () => {
  // Load chat history first
  loadChatHistory();
  
  // Setup scroll position handling after a short delay
  setTimeout(() => {
    if (chatResponses) {
      // Save scroll position before popup closes
      chrome.runtime.connect().onDisconnect.addListener(() => {
        saveScrollPosition();
      });
      
      // Save scroll position on scroll (debounced)
      let scrollTimeout;
      chatResponses.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(saveScrollPosition, 150);
      });
      
      // Initial scroll position restore
      restoreScrollPosition(true);
    }
  }, 100);
});

// Image Upload Handling
imageUpload.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  if (!file.type.startsWith('image/')) {
    log('Please upload an image file', 'error');
    return;
  }
  
  try {
    // Convert image to base64
    const base64Image = await fileToBase64(file);
    currentImage = base64Image;
    
    // Show preview
    const previewEl = document.createElement('div');
    previewEl.classList.add('message', 'user-message', 'image-message');
    previewEl.innerHTML = `
      <img src="${base64Image}" alt="Uploaded image" class="image-preview">
      <div>Image uploaded successfully! Type your question about the image.</div>
    `;
    chatResponses.appendChild(previewEl);
    chatResponses.scrollTop = chatResponses.scrollHeight;
    
    // Save to chat history
    saveMessage({ type: 'image', content: base64Image }, 'user');
  } catch (error) {
    log(`Error processing image: ${error}`, 'error');
  }
});

// File to Base64 conversion
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Send Message Functionality
async function sendMessage() {
  const message = userInput.value.trim();
  
  if (!message && !currentImage) return;

  // Clear input
  userInput.value = '';
  
  // Add user message to chat
  const userMessageEl = document.createElement('div');
  userMessageEl.classList.add('message', 'user-message');
  userMessageEl.textContent = message;
  chatResponses.appendChild(userMessageEl);

  // Prepare messages array
  const messages = [
    {
      role: "system",
      content: "You are a helpful AI assistant in a Chrome extension."
    }
  ];

  // Add image if present
  if (currentImage) {
    messages.push({
      role: "user",
      content: [
        { type: "image_url", image_url: { url: currentImage } },
        { type: "text", text: message || "What's in this image?" }
      ]
    });
  } else {
    messages.push({
      role: "user",
      content: message
    });
  }

  // Save message to history
  saveMessage(message, 'user');

  // Always scroll to bottom after sending
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

    // Call Grok API with vision model for images
    fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${result.grokApiKey}`
      },
      body: JSON.stringify({
        model: currentImage ? "grok-2-vision-1212" : "grok-2-1212",
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
        stream: false
      })
    })
    .then(response => {
      log(`Response status: ${response.status}`);
      if (!response.ok) {
        return response.text().then(errorText => {
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
      
      const aiResponse = data.choices && data.choices[0] && data.choices[0].message 
        ? data.choices[0].message.content 
        : 'Sorry, I could not generate a response.';
      
      const aiMessageEl = document.createElement('div');
      aiMessageEl.classList.add('message', 'ai-message');
      aiMessageEl.textContent = aiResponse;
      chatResponses.appendChild(aiMessageEl);
      
      // Save AI response to history
      saveMessage(aiResponse, 'ai');
      
      // Clear current image after processing
      currentImage = null;
      
      // Scroll to bottom
      chatResponses.scrollTop = chatResponses.scrollHeight;
    })
    .catch(error => {
      log(`Error: ${error.message}`, 'error');
      
      const errorMessageEl = document.createElement('div');
      errorMessageEl.classList.add('message', 'ai-message', 'error');
      errorMessageEl.textContent = `Error: ${error.message}`;
      chatResponses.appendChild(errorMessageEl);
    });
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
