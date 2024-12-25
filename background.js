chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'start-aeye',
    title: 'Start Aeye',
    contexts: ['all']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'start-aeye') {
    chrome.action.openPopup();
  }
});
