//Say bye to passed name
(function(window){
  //initialize
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  //sets variable to passed name and set greeting
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };
  //send string to global scale
  window.byeSpeaker = byeSpeaker;
})(window);
  
