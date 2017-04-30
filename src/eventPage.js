chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request && request.action === 'createWindow' && request.url) {
    chrome.windows.create({url: request.url}, function (win) {
      sendResponse(win);
    });
  }
});