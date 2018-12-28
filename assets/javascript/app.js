// VARIABLES
////////////////////////////////////////////////////////////////////////////////////////

var questions = [
    {q: "question 1", a: "answer 1"},
    {q: "question 2", a: "answer 2"},
    {q: "question 3", a: "answer 3"},
    {q: "question 4", a: "answer 4"},
    {q: "question 5", a: "answer 5"},
];

var questionCount = 0;

var questionCountdown = 20;
var countdownRunning = false;
var intervalId;


// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////
function renderQuestions() {

        // if there are no more questions, stop renderQuestions function
        if (questionCount > (questions.length - 1)) {
            return;
        }

        else {

            // TODO: check what question we are one using an if stmt before rendering the next question
            for (let i = 0; i < questions.length; i++) {
                $("#questions-div").text(questions[i].q);
                console.log("count " + questionCount);
                questionCount++;
        }
    };
};

function startCountdown() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement() {

    // Decrease the countdown
    questionCountdown--;

    // Place current countdown number onto html
    $("#timer").html("<h2>" + questionCountdown + "</h2>");

    // if timer is at 0, stop the countdown
    if (questionCountdown === 0) {
        stop();
        // alert("time's up!");

        // TODO: allow countdown to show 0, show loading circle (3 sec timeout), before restarting countdown
        restartCountdown();
    };
}

// function to stop the question countdown
function stop() {
    clearInterval(intervalId);
};

// function to reset and restart countdown
function restartCountdown() {
    // if (!countdownRunning) {
    //     intervalId = setInterval(count, 1000);
    // }
    questionCountdown = 20;
    $("#timer").html("<h2>" + questionCountdown + "</h2>");
};




// MAIN PROCESS
////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    // renderQuestions();
    startCountdown();
});