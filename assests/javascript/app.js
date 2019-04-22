// when page loads the only objects showing will be the header and start button
var corect = 0;
var timeLeft = 25;

$(document).ready(function(){
// when user clicks on the start button the question and possible answers will appear after 3 seconds and timer will start

$("#start").on("click", function(){
    console.log("click");
    startGame();
})

function startGame(){
    corect();
    wrong();
    timesUp();
}

function nextQuestion(){
    timer();
}
function corect(){
    nextQuestion();
}

function wrong(){
    nextQuestion();
}

function timesUp(){
    nextQuestion();
}

function timer(){

}



})



// the timer will count down from 25 to 0 

// the user will click on the 4 avaible choices to answer the question.

// if the user is corect a message plus image will apear and the next question will apper in 3 seconds

// if user is wrong show a wrong message and next question will apear in 3 seconds

// if user runs out of time a time up message will apear and the question will be marked wrong next question will apear in 3 seconds

// when all questions have been completed users total will be displayed 