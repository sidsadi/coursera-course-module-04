(function (window){
    var byeSpeaker = {};
    var speakWord = "Good Bye";
    
    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
    window.byeSpeaker = byeSpeaker;
    })(window);


    (function (window) {  
        var helloSpeaker = {};
        var speakWord = "Hello";
        
        helloSpeaker.speak = function (names) {
          console.log(speakWord + " " + names);
        }
            window.helloSpeaker = helloSpeaker;
        })  (window);
     


(function () {

    var names = ["Yasir", "Jawad", "Jahnjeeb", "Javeed", "Pariyan", "Farukh", "Larib", "Piya", "Laiba", "John"];
    for (var i in names) {
        var firstLetter = ((names[i]).charAt(0)).toLowerCase();
        if (firstLetter == 'j') {
           window.byeSpeaker.speak(names[i]);
        } 
        else {
           window.helloSpeaker.speak(names[i]);
        }
      }
      })(window);
    
