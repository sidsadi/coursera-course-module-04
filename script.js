var names = [yasir", "Jawad", "John", "Javeed", "Parihan", "Farukh", "Larib", "Piya", "Laiba", "Jahnjaeeb"]
for var (i=0; i< name.length;i++){
 var firstletter = names[i].CharAt(0).toLowerCase();
 if (firstletter === 'j'){
 GoodBye.jSomeName(names[i]);
 else{
 hello SomeName(names[i]);
 }
 }  
 

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
    })(window);
