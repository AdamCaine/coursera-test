//main execution starts here
(function(){
  //initialize
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  //loop through names, getting lower case of first letter  
  for (var i in names) {
    var firstLetter = names[i].toLowerCase().charAt(0);
    //decide to say bye to first letter "J" names
    if (firstLetter == "j") {
      byeSpeaker.speak(names[i])
    //or hello to everyone else. 
    } else {
      helloSpeaker.speak(names[i])
    };
  };
})();

