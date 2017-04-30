var head= document.getElementsByTagName('head')[0];
/*
var script= document.createElement('script');

script.type= 'text/javascript';
script.src= 'https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.9.0/mark.js';
*/




// head.appendChild(script);
// chrome.windows.getCurrent(function(win)
// {
//     chrome.tabs.getAllInWindow(win.id, function(tabs)
//     {
//         // Should output an array of tab objects to your dev console.
//         console.debug(tabs);
//     });
// });

  var context = document.querySelector("body");
  console.log('context', context);
  var instance = new Mark(context);
  console.log('instance', instance);
  var words = ['moon', 'blue'];

  function handleSetQuery(findWords) {
      instance.mark(findWords);
  }

  handleSetQuery(words);
/*
script.onload = () => {
  // document.addEventListener('DOMContentLoaded', function () {
  var context = document.querySelector("body");
  console.log('context', context);
  var instance = new Mark(context);
  console.log('instance', instance);
  var words = ['moon', 'blue'];

  function handleSetQuery(findWords) {
      instance.mark(findWords);
  }

  handleSetQuery(words);
  // });

  // chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //     if (request.action === "setquery") {
  //         alert("received: setquery");
  //         handleSetQuery(request.data);
  //     } else if (request.action === "previous") {
  //         handlePrevious();
  //     } else if (request.action === "next") {
  //         handleNext();
  //     } else if (request.action === "clear") {
  //         handleClear();
  //     }
  // });
};
*/

