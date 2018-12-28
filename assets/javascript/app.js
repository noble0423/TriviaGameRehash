// VARIABLES
////////////////////////////////////////////////////////////////////////////////////////

var questions = [
    {q: "question 1", a: "answer 1"},
    {q: "question 2", a: "answer 2"},
    {q: "question 3", a: "answer 3"},
    {q: "question 4", a: "answer 4"},
    {q: "question 5", a: "answer 5"},
];




// FUNCTIONS
////////////////////////////////////////////////////////////////////////////////////////
function renderQuestions() {

    $("#questions-div").append(questions[0].q);
    
    // use a for loop 

    // check what question we are one using an if stmt
}




// MAIN PROCESS
////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    renderQuestions();
});