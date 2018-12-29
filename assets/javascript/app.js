// VARIABLES
////////////////////////////////////////////////////////////////////////////////////////

var questions = [
    {q: "question 1", c1: "Q1 a", c2: "Q1 b", c3: "Q1 c", c4: "Q1 d", a: "Q1 a"},
    {q: "question 2", c1: "Q2 a", c2: "Q2 b", c3: "Q2 c", c4: "Q2 d", a: "Q2 b"},
    {q: "question 3", c1: "Q3 a", c2: "Q3 b", c3: "Q3 c", c4: "Q3 d", a: "Q3 c"},
    {q: "question 4", c1: "Q4 a", c2: "Q4 b", c3: "Q4 c", c4: "Q4 d", a: "Q4 d"},
    {q: "question 5", c1: "Q5 a", c2: "Q5 b", c3: "Q5 c", c4: "Q5 d", a: "Q5 a"},
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

    // Checks what question we are one using an if stmt before rendering the next question

    else if (questionIndex <= (questions.length - 1)) {
        // console.log(questionIndex);

        // display question on html
        $("#questions-div").text(questions[questionIndex].q);

        // display the corrseponding answers on html
        var choicesDiv = $("<div>");
        choicesDiv.append("<br>");

        $("#answers-div").text("ANSWER CHOICES")
            .append(choicesDiv)
            .append("<span>" + questions[questionIndex].c1 + "</span><br>")
            .append("<span>" + questions[questionIndex].c2 + "</span><br>")
            .append("<span>" + questions[questionIndex].c3 + "</span><br>")
            .append("<span>" + questions[questionIndex].c4 + "</span><br>");

        questionIndex++;
        // console.log(questionIndex);
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
};



//TODO: 
    // Set click event for all answer choices (var userChoice)
        // Compare userChoice to answer for that question
            // If right, show the correct animation
            // If wrong, show the incorrect animation and display the correct answer
    // Style the dynamic html items (add necessary classes/id's)
    // Write logic to move onto next question once user makes a choice
    // Write the loading question logic (incl the "thinking" gif)
    // Write the end game screen
        // # Correct
        // # Incorrect
        // Review incorrect answers??
    // Style the entire pg (css, bootstrap)


// MAIN PROCESS
////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    // renderQuestions();
    startCountdown();
});