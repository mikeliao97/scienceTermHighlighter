var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');

script.type= 'text/javascript';
script.src= 'https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.9.0/mark.js';


// windows.getCurrent(function(win)
// {
//   console.log('this is the win', win);
// });


script.onload = () => {
  // document.addEventListener('DOMContentLoaded', function () {
  var context = document.querySelector("body");
  console.log('context', context);
  var instance = new window.Mark(context);
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

head.appendChild(script);