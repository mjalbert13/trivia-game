
var timeLeft = 25;
var countDown;
var rightAnswers=0;
var wrongAnswers=0;
var userGuess;
var questions = [ "Who has won the most superbowls?","Who has the most Major tournement wins in Golf?","Which of these have never been a modern Olympic event?","The Stanley Cup is the championship for what league?","Babe Ruth was traded form the Red Sox to what team?","What NBA team has won the most championships?","The World Cup is contested every how many years?"];
var choices  =[["Tom Brady","Payton Manning","Tony Romo","Bret Frave"],["Tiger Woods","Sam Snead","Jack Nicklaus","Bobby Jones"],["Tug-of-War","Kyacking","Jousting","Boxing"],["NFL","NHL","NBA","MLB"],["Tampa Bay Rays", "Montreal Expos", "Baltiomore Oriels", "New York Yankees"],["Celtics","Lakers","Magic","76's"],["3","7","4","5"]];
var answer = ["A. Tom Brady","C. Jack Nicklaus","C. Jousting","B. NHL","D. New York Yankees","A. Celtics","C. 4"];
var questionNumber = 0;
var startPage;
var quiz;
    
// When page loads the start screen will show    
$(document).ready(function(){

    function initialize() {
        startPage = "<p class='text-center instructions'>Click start to test your sports knowledge</p><p><button type='button' class='btn btn-primary justify-content-center start'>Start</button></p>";
        $(".content").html(startPage);
    }
    
    initialize();
// when user clicks start game begins
    $("body").on("click",".start", function(){
        quizText();
        timer();
    });
// the user will click on the 4 avaible choices to answer the question.
    $("body").on("click", ".answers", function(){
        userGuess = $(this).text();
        console.log(userGuess);
            if(userGuess === answer[questionNumber]){
                clearInterval(countDown);
                corect();
            }
            else{
                clearInterval(countDown);
                wrong();
            }
    });

    $("body").on("click", ".restart", function(){
        initialize();
    })
});

//Dynamicly create html for the questions and answersyou click start
function quizText(){

    quiz ="<p class='text-center time'>Time remaing: <span id='time'>25</span></p><p class='text-center question'>" + questions[questionNumber] + "</p><p class='fist-choice answers'>A. " + choices[questionNumber][0] + "</p><p class='answers'>B. " + choices[questionNumber][1] + "</p><p class='answers'>C. "+ choices[questionNumber][2] + "</p><p class='answers'>D. " + choices[questionNumber][3]+ "</p>";
    $(".content").html(quiz);
}
// the timer will count down from 25 to 0
// if clock gets to 0 time up function is called 
function timer(){
    countDown = setInterval(twentyFiveSecs, 1000);
    function twentyFiveSecs(){
        if(timeLeft===0){
            clearInterval(countDown);
            timesUp();
            alert("times up")
        }
        if(timeLeft > 0) {
            timeLeft--;
        }
        $("#time").text(timeLeft);
    }
}

// create a function to wait a few seconds and then call the next question
function transition(){
    if(questionNumber < 6){
        questionNumber++;
        timeLeft =25;
        timer();
        quizText();
    }
    else {
        completed();
    }
}

// if the user is corect a message plus image will apear and the next question will apper in 4 seconds
function corect(){
    thatsRight = "<p>Thats Corect!</p><p><img class='center-block' src='../images/right.JPG'></p>";
    $(".content").html(thatsRight);
    rightAnswers++;
    console.log(rightAnswers);
    setTimeout(transition,4000);
}

// if user is wrong show a wrong message and next question will apear in 4 seconds
function wrong(){
    thatsWrong = "<p>Thats Wrong!</p><p>The right answer is "+answer[questionNumber]+"</p><p><img class='center-block' src='../images/wrong.jpg'></p> ";
    $(".content").html(thatsWrong);
    wrongAnswers++;
    console.log(wrongAnswers);
    setTimeout(transition,4000);
}

// if user runs out of time a time up message will apear and the question will be marked wrong next question will apear in 4 seconds
function timesUp(){
    wrongAnswers++;
    quiz = "<P>Sorry times up!</p><p><img class='center-block' src='../images/timesup.JPG'></p>";
    $(".content").html(quiz);
    setTimeout(transition,4000);
}

// when all questions have been completed users total will be displayed and timer will stop
function completed(){
    if(questionNumber = 7){
    clearInterval(countDown);
    finalPage = "<p class= 'text-center'> Your score is "+rightAnswers+"/7</p><p><button type='button' class='btn btn-primary justify-content-center restart'>Restart</button></p>";
    $(".content").html(finalPage);
    }
}
