const bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection-bubble');
document.body.appendChild(bubbleDOM);

document.addEventListener('mouseup', function (e) {
  const selection = window.getSelection().toString();
  const querySelection = queryHighlightedWord(selection);
  if (selection.length > 0) {
    renderBubble(e.clientX, e.clientY, querySelection);
  }
}, false);

// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden';
}, false);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
  const selectionData = selection;
  selectionData.definition = selectionData.definition.length > 96 ?
                             selectionData.definition.slice(0, 94) + '...' :
                             selectionData.definition;
  bubbleDOM.innerHTML = `<h3>${selection.term}</h3>` +
                        `<p>${selection.definition}</p>` +
                        '<a id="see-more-button" href="#">See More...</a>' +
                        `<img src="${selection.imageSource}"/>`;
  bubbleDOM.style.top = mouseY - 50 + 'px';
  bubbleDOM.style.left = mouseX - 50 + 'px';
  bubbleDOM.style.visibility = 'visible';
}
