const getHighlightedWord = () => {
  let text = '';
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
};

const queryHighlightedWord = () => {
  const highlightedWord = getHighlightedWord();
  console.log('highlighted word:', highlightedWord);
};

document.addEventListener('dblclick', queryHighlightedWord);
