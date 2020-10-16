// function saveHighscore() {
//   var printHighscore = document.createElement("div");
//   printHighscore.textContent = timeLeft;
//   console.log(timerInterval);
// }

// var highscoresList = document.getElementById("highscoresList");
// var highscores = JSON.parse(localStorage).getItem("highscores") || [];
// console.log(highscores);

var initials = document.getElementById("userInitials");
var submitBtn = document.getElementById("submitBtn");

initials.addEventListener("keyup", () => {
  submitBtn.disabled = !initials.value;
});

var finalScore = document.getElementById("finalScore");
// grabs score from local
var grabsRecentScore = localStorage.getItem("mostRecentScore");
finalScore.textContent = grabsRecentScore;

var saveHighscore = e => {
  e.preventDefault();
  var initialValue = initials.value;
  localStorage.setItem("initialValue", JSON.stringify(initialValue));
  var highscoreDiv = document.createElement("div");
  var renderScore = localStorage.getItem("initialValue");
  highscoreDiv.innerHTML = renderScore;
  questionContainer.append(highscoreDiv);
};
$("#userInitials").submit(saveHighscore);


















////////////////////////////
//add picture with score.
/////////////////////////////


// function checkAnswer(answer){
//     if( answer == questions[runningQuestion].correct){
//         // answer was correct
//         score++;
//         // change answer result to blue
//         answerIsCorrect();
//     }else{
//         // answer was wrong
//         // grey circle will appear
//         answerIsWrong();
//     }
//     count = 0;
//     if(runningQuestion < lastQuestion){
//         runningQuestion++;
//         renderQuestion();
//     }else{
//       //show score

//         clearInterval(TIMER);
//         scoreRender();
//     }
// }

// // answer was wrong, grey dot
// function answerIsWrong(){
//     document.getElementById(runningQuestion).style.backgroundColor = "#262626";
// }

// function answerIsCorrect(){
//     document.getElementById(runningQuestion).style.backgroundColor = "#ffffff";
// }

// //send score
// function scoreRender(){
//     scoreDiv.style.display = "block";