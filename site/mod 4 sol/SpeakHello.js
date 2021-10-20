//Say hi to passed name
(function(window){
  //initialize 
  var helloSpeaker = {};
  var speakWord = "Hello";
  //sets variable to passed name and set greeting
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  //send string to global scale
  window.helloSpeaker = helloSpeaker;
})(window);
