
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

let randomNumber;
function nextSequence() {
    randomNumber = Math.floor(Math.random() * 4);
}
// Questa è un alternativa che può essere utile per il progetto torneo virtuale
//var randomNumber = function nextSequence() {
   // Math.floor(Math.random() * 4);
//}

var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);

$(document).ready(function(){
    $("#green").click (function(){
            $('#green'). fadeOut(100);
            $('#green'). fadeIn(100);
       });

        $("#red").click (function(){
            $('#red'). fadeOut(100);
            $('#red'). fadeIn(100);
        });

        $("#yellow").click (function(){
            $("#yellow"). fadeOut(100);
            $("#yellow"). fadeIn(100);
        });

        $("#blue").click (function(){
            $('#blue'). fadeOut(100);
            $('#blue'). fadeIn(100);
        });

 });

 document.getElementById("audiogreen").addEventListener("click", play);
 function play() {
    audiogreen.play();
  }

  

  
        