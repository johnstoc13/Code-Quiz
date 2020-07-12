// Quiz questions
const myQuestions = [
    {
      question: "What is the outer most section of the box model?",
      answers: {
        a: "Padding",
        b: "Margin",
        c: "Content",
        d: "Border"
      },
      correctAnswer: "b"
    },
    {
      question: "How many columns are available in a page?",
      answers: {
        a: "8",
        b: "16",
        c: "4",
        d: "12"
      },
      correctAnswer: "d"
    },
    {
      question: "Which index do arrays begin with?",
      answers: {
        a: "1",
        b: "string",
        c: "0",
        d: "null"
      },
      correctAnswer: "c"
    },
    {
        question: "Which of the following codes signifies 'or'?",
        answers: {
          a: "$$",
          b: "&&",
          c: "||",
          d: "=="
        },
        correctAnswer: "c"
      },
      {
        question: "What does CSS stand for?",
        answers: {
          a: "Cascading Style Sheet",
          b: "Computer Screen Style",
          c: "Cascading Style Screen",
          d: "Complicated Sheet Styling"
        },
        correctAnswer: "a"
      },
      {
        question: "What does API stand for?",
        answers: {
          a: "Application Pre Interview",
          b: "Application Programming Interface",
          c: "Assisted Programming Interface",
          d: "Assisted Python Integration"
        },
        correctAnswer: "b"
      },
      {
        question: "Which storage object stores data with no expiration?",
        answers: {
          a: "databaseStorage",
          b: "sessionStorage",
          c: "websiteStorage",
          d: "localStorage"
        },
        correctAnswer: "d"
      },
      {
        question: "Which of the following is a valid HTML tag?",
        answers: {
          a: "<aside>",
          b: "<title>",
          c: "<body>",
          d: "All of the above!"
        },
        correctAnswer: "d"
      },
      {
        question: "Which of the following is a valid javascript function?",
        answers: {
          a: "function myFunction()",
          b: "function() myFunction",
          c: "let myFunction = ()",
          d: "my Function()"
        },
        correctAnswer: "a"
      },
      {
        question: "What does DOM stand for?",
        answers: {
          a: "Database Object Module",
          b: "Document Object Model",
          c: "Developer Office Machine",
          d: "Database Output Model"
        },
        correctAnswer: "b"
      }
  ];

// Starting score variable
let score = 0;
let timeLeft = 5
const quizQuestion = document.getElementById("question");

// Runs the countdown timer when clicked
function countdown() {
    const timer = setInterval(timeText, 1000);
    
    function timeText() {
        document.getElementById("timer").innerHTML = --timeLeft + " sec ";
        if (timeLeft == 0) {
            clearInterval(timer);
        }
    }
}

// Toggle from home page to beginning of quiz
function startQuiz() {
    document.getElementById("startquiz").style.display = "block";
    document.getElementById("startpage").style.display = "none";
}












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




// function endQuiz() {
//     document.getElementById("end-of-quiz").inne
//     if (timeLeft == 0) {

//     }
// }

// NEEDS:
// 
// Need questions and multiple choice answers to be displayed in a form or card of sorts (maybe just as a <p>?)
// Need to get users answer and validate true/false
// Need to display "correct" or "incorrect"  (if incorrect, subtract time)
// NEXT button to move on to next question
// When time runs out, end quiz and reveal score. Also ask for user intials to be sent to HIGHSCORE page


// <ol> for the highscores.  Add some css to every other line to make easy to read
// Button to clear the highscores and reset the session log.