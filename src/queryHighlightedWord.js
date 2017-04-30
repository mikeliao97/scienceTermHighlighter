// Called when the user clicks on the chrome extension.
chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript({
    code: JSON.stringify(getHighlightedWord)
  });
});

const getHighlightedWord = (() => {
  let text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  console.log(text);
  return text;
})();
