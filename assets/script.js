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
const submitScore = document.querySelector("#submit");
const highscoreNav = document.querySelector("#highscore-nav");
const deleteScore = document.querySelector("#clear-scores");
const scoreList = document.querySelector("#score-list");
let runningQuestion = 0;
let lastQuestion = myQuestions.length - 1;
let timer;

// Runs the countdown timer, activates startQuiz & displayQuestion functions when clicked
function countDown() {
  timer = setInterval(function () {
    timeLeft--;
    timerDisplay.textContent = timeLeft + " sec ";
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000)
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
      score = 0;
    } else {
      finalScore.textContent = "Your final score is " + timeLeft + ".";
      score = timeLeft;
    }
  }
}

// Displays highscores section
function showHighscores() {
  document.getElementById("highscores").style.display = "block";
  document.getElementById("endquiz").style.display = "none";
  document.getElementById("startpage").style.display = "none";
  document.getElementById("reset-nav").style.display = "block";
  document.getElementById("highscore-nav").style.display = "none";
  getScores();
  sortList();
}

// Stores the initials and score of the user in local storage
function storeScores() {
  // Stringify and set "initials" key in localStorage to scores array
  const initials = document.getElementById("inputInitials").value
  localStorage.setItem(score, initials);
}

// Pushes the stored scores into an ordered list on the page
function getScores() {
  console.log(localStorage);
  // Returns an array of keys
  // Help here with tutoring session 7/14/2020
  let scoresArray = Object.keys(localStorage);
  for (var i = 0; i < scoresArray.length; i++) {
    console.log(localStorage[scoresArray[i]]);
    let li = document.createElement("li");
    // Cited:  https://stackoverflow.com/questions/33539797/how-to-create-string-with-multiple-spaces-in-javascript
    li.textContent = "\xa0\xa0\xa0" + scoresArray[i].toUpperCase() + "\xa0\xa0" + "-" + "\xa0\xa0" + localStorage[scoresArray[i]];
    document.getElementById("score-list").appendChild(li);
  }
}

// This sort function does an alphabetical sort on the initials
// Cited:  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sort_list
function sortList() {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("score-list");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("li");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
      if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

// Event listeners for each multiple choice answer
start.addEventListener("click", countDown);
answer1.addEventListener("click", setClickedAnswer);
answer2.addEventListener("click", setClickedAnswer);
answer3.addEventListener("click", setClickedAnswer);
answer4.addEventListener("click", setClickedAnswer);
submitScore.addEventListener("click", function () {
  storeScores();
  showHighscores();
  sortList();
});
highscoreNav.addEventListener("click", showHighscores);
deleteScore.addEventListener("click", function () {
  localStorage.clear()
  document.getElementById("score-list").innerHTML = "";
});