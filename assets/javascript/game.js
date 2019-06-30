

$(document).ready(function () {


    // getting the target number is the first move
// adding 19 so the lowest will be 19 and the highest is 120

var playerNumber = 0;
var targetNumber = Math.floor(Math.random() * 101) + 19;
var crystal1Value = Math.floor(Math.random() * 11) + 1;
var crystal2Value = Math.floor(Math.random() * 11) + 1;

console.log(targetNumber);

// now how about we also do random numbers between 1-12 and make it a variable we can add to the current value you start with which is gonna be 0

console.log(crystal1Value);
console.log(crystal2Value);

// lets add a click function to the div thats holding the crystal we have rn and add the crystal value we made original over and over

    $("#crystal1").on("click", function () {


       playerNumber += crystal1Value;

       console.log(playerNumber);


       if (playerNumber === targetNumber) {

        alert("You win!");
    
    }
    
    if (playerNumber > targetNumber) {
    
        alert("You lose!");
    
    }
    

    });

    $("#crystal2").on("click", function () {


        playerNumber += crystal2Value;
 
        console.log(playerNumber);
 
 
        if (playerNumber === targetNumber) {
 
         alert("You win!");
     
     }
     
     if (playerNumber > targetNumber) {
     
         alert("You lose!");
     
     }
     
 
     });

// so far so good lowkey lets add a filler win lose text 

// why is this working so well am i a genus??











});



