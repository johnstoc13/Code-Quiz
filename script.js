// Quiz questions
// Cited:  https://www.codeexplained.org/2018/10/create-multiple-choice-quiz-using-javascript.html
let myQuestions = [
  {
    question: "What is the outer most section of the box model?",
    choiceA: "Padding",
    choiceB: "Margin",
    choiceC: "Content",
    choiceD: "Border",
    answer: "2"
  },
  {
    question: "How many columns are available in a page?",
    choiceA: "8",
    choiceB: "16",
    choiceC: "4",
    choiceD: "12",
    answer: "4"
  },
  {
    question: "Which index do arrays begin with?",
    choiceA: "1",
    choiceB: "string",
    choiceC: "0",
    choiceD: "null",
    answer: "3"
  },
  {
    question: "Which of the following codes signifies 'or'?",
    choiceA: "$$",
    choiceB: "&&",
    choiceC: "||",
    choiceD: "==",
    answer: "3"
  },
  {
    question: "What does CSS stand for?",
    choiceA: "Cascading Style Sheet",
    choiceB: "Computer Screen Style",
    choiceC: "Cascading Style Screen",
    choiceD: "Complicated Sheet Styling",
    answer: "1"
  },
  {
    question: "What does API stand for?",
    choiceA: "Application Pre Interview",
    choiceB: "Application Programming Interface",
    choiceC: "Assisted Programming Interface",
    choiceD: "Assisted Python Integration",
    answer: "2"
  },
  {
    question: "Which storage object stores data with no expiration?",
    choiceA: "databaseStorage",
    choiceB: "sessionStorage",
    choiceC: "websiteStorage",
    choiceD: "localStorage",
    answer: "4"
  },
  {
    question: "Which of the following is a valid HTML tag?",
    choiceA: "<aside>",
    choiceB: "<title>",
    choiceC: "<body>",
    choiceD: "All of the above!",
    answer: "4"
  },
  {
    question: "Which of the following is a valid javascript function?",
    choiceA: "function myFunction()",
    choiceB: "function() myFunction",
    choiceC: "let myFunction = ()",
    choiceD: "my Function()",
    answer: "1"
  },
  {
    question: "What does DOM stand for?",
    choiceA: "Database Object Module",
    choiceB: "Document Object Model",
    choiceC: "Developer Office Machine",
    choiceD: "Database Output Model",
    answer: "2"
  }
];

// Starting variables
let score = 0;
let timeLeft = 60;
const start = document.querySelector("#start");
const quizQuestion = document.querySelector("#question");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const answer4 = document.getElementById("4");
const returnAnswer = document.querySelector("#return-answer");
const finalAnswer = document.querySelector("#final-answer");
const timerDisplay = document.querySelector("#timer");
const finalScore = document.querySelector("#finalscore");
let runningQuestion = 0;
let lastQuestion = myQuestions.length - 1;
let timer;

// Runs the countdown timer, activates startQuiz & displayQuestion functions when clicked
function countdown() {
  timer = setInterval(timeText, 1000);

  function timeText() {
    if (timeLeft == 0) {
      clearInterval(timer);
    }
    timerDisplay.textContent = --timeLeft + " sec ";
  }
  startQuiz();
  displayQuestion();
}

// Display first question and answers
function displayQuestion() {
  q = myQuestions[runningQuestion];
  quizQuestion.textContent = q.question;
  answer1.textContent = q.choiceA;
  answer2.textContent = q.choiceB;
  answer3.textContent = q.choiceC;
  answer4.textContent = q.choiceD;
}

// Toggle from home page to beginning of quiz
function startQuiz() {
  document.getElementById("startpage").style.display = "none";
  document.getElementById("startquiz").style.display = "block";
}

//Set clicked answer to new value for validation 
// Cited:  https://stackoverflow.com/questions/62877440/trouble-with-multiple-choice-quiz
function setClickedAnswer(button) {
  if (button.target.id === "1") {
    clickedAnswer = 1;
  } else if (button.target.id === "2") {
    clickedAnswer = 2;
  } else if (button.target.id === "3") {
    clickedAnswer = 3;
  } else {
    clickedAnswer = 4;
  }
  validateAnswer();
  // console.log(clickedAnswer);
}

// Validate clicked answer with quiz answer
function validateAnswer() {
  if (timeLeft > 0) {
    if (clickedAnswer == q.answer) {
      returnAnswer.setAttribute("class", "correct");
      returnAnswer.textContent = "CORRECT!";
      finalAnswer.setAttribute("class", "correct");
      finalAnswer.textContent = "CORRECT!";
      nextQuestion();
    } else {
      returnAnswer.setAttribute("class", "wrong");
      returnAnswer.textContent = "WRONG!";
      finalAnswer.setAttribute("class", "wrong");
      finalAnswer.textContent = "WRONG!";
      timeLeft -= 10;
      nextQuestion();
    }
  } else endQuiz();

}

// Load next question
function nextQuestion() {
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    displayQuestion();
  } else endQuiz();
}

// End quiz and display final score
function endQuiz() {
  clearInterval(timer);
  document.getElementById("startquiz").style.display = "none";
  document.getElementById("endquiz").style.display = "block"; {
    if (timeLeft <= 0) {
      finalScore.textContent = "Your final score is 0.";
      timerDisplay.textContent = " 0 sec ";
    } else {
      finalScore.textContent = "Your final score is " + timeLeft + ".";
    }
  }
}

// Event listeners for each multiple choice answer
start.addEventListener("click", countdown);
answer1.addEventListener("click", setClickedAnswer);
answer2.addEventListener("click", setClickedAnswer);
answer3.addEventListener("click", setClickedAnswer);
answer4.addEventListener("click", setClickedAnswer);











// console.log(validateAnswer);

// Ideas for above loop:  Need to validate 

// for (var i = 0; i < myQuestions.length; i++) {
//     let response = onclick(questions[i])
//     if (response == questions[i].answer) {
//         score++;
//     } else {
//         timeLeft-10;
//     }
// }

// const scoreList = document.querySelector("#score-list");
// let scores = [];

// function renderHighscores() {
//     // Clear scoreList element and update todoCountSpan
//     scoreList.innerHTML = "";

//     // Render a new li for each highscore
//     for (var i = 0; i < scores.length; i++) {
//       var score = scores[i];

//       var li = document.createElement("li");
//       li.textContent = score;
//       li.setAttribute("data-index", i);

//       scoreList.appendChild(li);
//     }
//   }

//   function storeScores() {
//     // Stringify and set "scores" key in localStorage to scores array
//     localStorage.setItem("scores", JSON.stringify(scores));
//   }

//   function init() {
//     // Get stored todos from localStorage
//     // Parsing the JSON string to an object
//     var storedScores = JSON.parse(localStorage.getItem("scores"));

//     // If todos were retrieved from localStorage, update the scores array to it
//     if (storedScores !== null) {
//       scores = storedScores;
//     }

//     // Render scores to the DOM
//     renderHighscores();
//   }


// NEEDS:
// 
// Need to display "correct" or "incorrect"  (if incorrect, subtract time)
// When time runs out, end quiz and reveal score. Also ask for user intials to be sent to HIGHSCORE page


// <ol> for the highscores.  Add some css to every other line to make easy to read
// Button to clear the highscores and reset the session log.