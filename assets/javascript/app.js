// VARIABLES
////////////////////////////////////////////////////////////////////////////////////////

var questions = [
    {q: "question 1", a: "answer 1"},
    {q: "question 2", a: "answer 2"},
    {q: "question 3", a: "answer 3"},
    {q: "question 4", a: "answer 4"},
    {q: "question 5", a: "answer 5"},
];

var questionIndex = 0;

var questionCountdown = 5;
var countdownRunning = false;
var intervalId;


// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////
function renderQuestions() {

    // if there are no more questions, stop renderQuestions function
    if (questionIndex > (questions.length - 1)) {
        // TODO: create a end game function that shows stats of game
        stopCountdown();
        return;
    }

    // else {

        // TODO: check what question we are one using an if stmt before rendering the next question
        // for (let i = 0; i < questions.length; i++) {

    else if (questionIndex <= (questions.length - 1)) {
        console.log(questionIndex);
        $("#questions-div").text(questions[questionIndex].q);
        questionIndex++;
        console.log(questionIndex);
        // renderQuestions();
    }
};

function startCountdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    renderQuestions();
};

function decrement() {

    // Decrease the countdown
    questionCountdown--;

    // Place current countdown number onto html
    $("#timer").html("<h2>" + questionCountdown + "</h2>");

    // if timer is at 0, stop the countdown
    if (questionCountdown === 0) {
        stopCountdown();
        // alert("time's up!");

        // TODO: allow countdown to show 0, show loading circle (3 sec timeout), before restarting countdown
        restartCountdown();
    }
}

// function to stop the question countdown
function stopCountdown() {
    clearInterval(intervalId);
};

// function to reset and restart countdown
function restartCountdown() {
    // if (!countdownRunning) {
    //     intervalId = setInterval(count, 1000);
    // }
    questionCountdown = 5;
    $("#timer").html("<h2>" + questionCountdown + "</h2>");
    startCountdown();
    // renderQuestions();

};




// MAIN PROCESS
////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    // renderQuestions();
    startCountdown();
});