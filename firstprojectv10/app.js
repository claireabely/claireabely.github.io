// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const qImg2 = document.getElementById("qImg2");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// questions
let questions = [
    {
        question : "What is the correct fair market value of The Entombment by Paul Cézanne?",
        imgSrc: "https://i.imgur.com/THDFAX0.jpg?1",
        img2Src : "https://i.imgur.com/bH1XSGP.png",
        choiceA : "70,000 USD",
        choiceB : "20,000 USD",
        choiceC : "120,000",
        correct : "A"
    },{
        question : "What is the name of this painting by Grant Wood?",
        img1Src : "https://sothebys-com.brightspotcdn.com/dims4/default/acf7ae5/2147483647/strip/true/crop/9083x11100+0+0/resize/684x836!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F4f%2F27%2F4a79a85c42748988055316a406d9%2Fgrant-wood-american-gothic.jpg",
        img2Src : "https://i.imgur.com/bH1XSGP.png",
        choiceA : "American Dream",
        choiceB : "American Gothic",
        choiceC : "The Farmer and His Wife",
        correct : "B"
    },{
        question : "What is the correct fair market value of Roman Notes V by Cy Twombly?",
        img1Src : "https://deliver.odai.yale.edu/content/id/b21ae9ec-cc05-4c92-a79f-5a5b6c911efe/format/2",
        img2Src : "https://i.imgur.com/bH1XSGP.png",
        choiceA : "50,000 USD",
        choiceB : "10,000 USD",
        choviceC : "120,000",
        correct : "A"
        
    },{
        question : "Who Became the official painter to Pope Julius II & Leo X?",
        img1Src : "data:image/jpeg;base64,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",
        img2Src : "https://i.imgur.com/THDFAX0.jpg?1",
        choiceA : "Raphael",
        choiceB : "Leonardo Da Vinci",
        choiceC : "Brunellescchi",
        correct : "B"
    },{
        question : "Who painted these strawberries?",
        img1Src : "https://www.sothebys.com/content/dam/stb/lots/L17/L17007/L17007_9HK2Q_web.jpg",
        ximgSrc : "https://i.imgur.com/THDFAX0.jpg?1",
        choiceA : "Pierre-Auguste Renoir",
        choiceB : "Marc Chagall",
        choiceC : "Lucian Freud",
        correct : "C"
    },{
        question : "What is the Correct fair market value for Flowers Sent as a Gift by David Hockney?",
        img1Src : "https://i.imgur.com/7E5yABH.png?1",
        ximgSrc: "https://i.imgur.com/THDFAX0.jpg?1",
        choiceA : "1M USD",
        choiceB : "20M USD",
        choiceC : "7M USD",
        correct : "C"
    },{
        question : "How many haystack paintings by Monet exist?",
        img1Src : "https://sothebys-com.brightspotcdn.com/dims4/default/4238589/2147483647/strip/true/crop/2000x1564+0+0/resize/1151x900!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F43%2Fcf%2F2e1949614262aefa6c378cb70a28%2F089n10067-3y7gy.jpg",
        ximgSrc : "https://i.imgur.com/THDFAX0.jpg?1",
        choiceA : "2",
        choiceB : "38",
        choiceC : "12",
        correct : "B"
    },{
        question : "What is the correct fair market value for Jeans, Albert Oehlen?",
        img1Src : "https://i.imgur.com/mJz15zH.jpg",
        ximgSrc : "https://i.imgur.com/THDFAX0.jpg?1",
        choiceA : "1M USD",
        choiceB : "600,000 USD",
        choiceC : "120,000 USD",
        correct : "B"
    },{
        question : "Between 1874 and 1886, How many Impressionist exhibitions were held?",
        img1Src : "https://www.sothebys.com/content/dam/stb/lots/PF1/PF1716/350PF1716_9KZB6_1.jpg",
        choiceA : "8",
        choiceB : "1",
        choiceC : "200",
        correct : "A"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];

    
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    qImg2.innerHTML = "<img src="+ q.img2Src +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end of the quiz and the score will show
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#d7f20c";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#afafb1";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "https://www.sartle.com/media/artwork/laughing-cavalier-frans-hals.jpg" :
              (scorePerCent >= 60) ? "https://flockler.com/thumbs/sites/889/11_001-e105cd3c-c2c7-499a-aafa-a74df76bde5f_s600x0.jpg" :
              (scorePerCent >= 40) ? "https://www.sothebys.com/content/dam/stb/lots/N08/N08898/034N08898_6FQFF.jpg.thumb.500.500.png" :
              (scorePerCent >= 20) ? "https://www.sothebys.com/content/dam/stb/lots/N09/N09497/232N09497_8ZJ76.jpg" :
              "https://www.christies.com/img/LotImages/2011/NYR/2011_NYR_02477_0062_000(pablo_picasso_mousquetaire_buste115018).jpg";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

