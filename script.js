const scoreList = document.querySelector("#score-list");



function countdown() {
    const timer = setInterval(timeText, 1000);
    let timeLeft = 5;
    
    function timeText() {
        document.getElementById("timer").innerHTML = --timeLeft + " sec ";
        if (timeLeft == 0) {
            clearInterval(timer);
        }
    }
}


// NEEDS:
// 
// Need questions and multiple choice answers to be displayed in a form or card of sorts (maybe just as a <p>?)
// Need to get users answer and validate true/false
// Need to display "correct" or "incorrect"  (if incorrect, subtract time)
// NEXT button to move on to next question
// When time runs out, end quiz and reveal score. Also ask for user intials to be sent to HIGHSCORE page


// <ol> for the highscores.  Add some css to every other line to make easy to read
// Button to clear the highscores and reset the session log.
