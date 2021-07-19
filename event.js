chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'Chapter 6',
    title: 'Chat in Whatsapp with %s',
    type: 'normal',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  chrome.storage.sync.get({
    number_extension: '+34',
  }, function(items) {
      chrome.tabs.create({
        url: 'https://web.whatsapp.com/send?phone='+items.number_extension+''+encodeURIComponent(info.selectionText)+'&text='
      });
  });
});
