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
var mostRecentScore = localStorage.getItem("mostRecentScore");
// finalScore.textContent = grabsRecentScore;
let numQuestions = localStorage.getItem("numQuestions")

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


$(() => {


// document.addEventListener("DOMContentLoaded",checkEnd)

  checkEnd()
})
function checkEnd(){
    // if(questions.length === runningQuestion){
        //win
        const scorePerCent = Math.round(100 * mostRecentScore/numQuestions);
console.log(scorePerCent);
        

        var img = (scorePerCent >= 80) ? "https://www.sartle.com/media/artwork/laughing-cavalier-frans-hals.jpg" :
        (scorePerCent >= 60) ? "https://flockler.com/thumbs/sites/889/11_001-e105cd3c-c2c7-499a-aafa-a74df76bde5f_s600x0.jpg" :
        (scorePerCent >= 40) ? "https://www.sothebys.com/content/dam/stb/lots/N08/N08898/034N08898_6FQFF.jpg.thumb.500.500.png" :
        (scorePerCent >= 20) ? "https://www.sothebys.com/content/dam/stb/lots/N09/N09497/232N09497_8ZJ76.jpg" :
        "https://www.sothebys.com/content/dam/stb/lots/L19/L19006/101L19006_B89S5.jpg";

        var scoreDiv = $("#scoreDiv");
        console.log(scoreDiv);
scoreDiv.html( "<img src="+ img +">");
// scoreDiv.append( "<p>"+ scorePerCent +"%</p>");
// finalScore.textContent = scorePerCent+"%";
finalScore.textContent = scorePerCent;
}


    

// function clearHighscore() {}

// function renderHighscore() {}

// // save to local
// function saveScore(input) {
//   var key = "input-" + input.id;
//   var storedValue = localStorage.getItem(key);
// }














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