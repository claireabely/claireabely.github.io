// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const description = document.getElementById("description");

// questions
let questions = [
    {
        question : "What is the correct fair market value of The Entombment by Paul Cézanne?",
        imgSrc : "https://i.imgur.com/THDFAX0.jpg?1",
        img2Src: "https://i.imgur.com/ezwJw7F.png",
        img3Src: "https://i.imgur.com/bH1XSGP.png",
        img4Src: "https://i.imgur.com/7B4ZWiX.jpg",
        description: "Paul Cezanne entombment",
        choiceA : "70,000 USD",
        choiceB : "20,000 USD",
        choiceC : "120,000",
        correct : "A"
    },{
        question : "What is the name of this painting by Grant Wood?",
        imgSrc : "https://sothebys-com.brightspotcdn.com/dims4/default/acf7ae5/2147483647/strip/true/crop/9083x11100+0+0/resize/684x836!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F4f%2F27%2F4a79a85c42748988055316a406d9%2Fgrant-wood-american-gothic.jpg",
        choiceA : "American Dream",
        choiceB : "American Gothic",
        choiceC : "The Farmer and His Wife",
        correct : "B"
    },{
        question : "What is the correct fair market value of Roman Notes V by Cy Twombly?",
        imgSrc : "https://b03.deliver.odai.yale.edu/b2/1a/b21ae9ec-cc05-4c92-a79f-5a5b6c911efe/ag-obj-89500-001-pub-med.jpg",
        img2Src: "https://i.imgur.com/d7Ry6w6.jpg",
        img3Src: "https://i.imgur.com/55vmiQm.jpg?1",
        img4Src: "https://i.imgur.com/Wbr0eIw.jpg[/img",
        description: "Paul Cezanne entombment",
        choiceA : "50,000 USD",
        choiceB : "10,000 USD",
        choiceC : "120,000",
        correct : "A"
        
    },{
        question : "Who Became the official painter to Pope Julius II & Leo X?",
        imgSrc : "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/head-of-a-young-apostle-raphael.jpg",
        choiceA : "Raphael",
        choiceB : "Leonardo Da Vinci",
        choiceC : "Brunellescchi",
        correct : "A"
    },{
        question : "Who painted these strawberries?",
        imgSrc : "https://www.sothebys.com/content/dam/stb/lots/L17/L17007/L17007_9HK2Q_web.jpg",
        choiceA : "Pierre-Auguste Renoir",
        choiceB : "Marc Chagall",
        choiceC : "Lucian Freud",
        correct : "C"
    },{
        question : "What is the Correct fair market value for Flowers Sent as a Gift by David Hockney?",
        imgSrc : "https://i.imgur.com/7E5yABH.png?1",
        img2Src : "https://i.imgur.com/NXZek53.png",
        img3Src : "https://i.imgur.com/aUnHIUv.jpg?1",
        img4Src : "https://i.imgur.com/1tKTgYV.jpg?1",
        choiceA : "1M USD",
        choiceB : "20M USD",
        choiceC : "7M USD",
        description: "30 Sunflowers   &emsp;&emsp;&emsp;&emsp; &emsp;     Jade Plant  &emsp;&emsp;&emsp;&emsp; &emsp; Iris Evian Bottle",
        correct : "C"
    },{
        question : "How many haystack paintings by Monet exist?",
        imgSrc : "https://sothebys-com.brightspotcdn.com/dims4/default/4238589/2147483647/strip/true/crop/2000x1564+0+0/resize/1151x900!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F43%2Fcf%2F2e1949614262aefa6c378cb70a28%2F089n10067-3y7gy.jpg",
        choiceA : "2",
        choiceB : "38",
        choiceC : "12",
        correct : "B"
    },{
        question : "What is the correct fair market value for Jeans, Albert Oehlen?",
        imgSrc : "https://i.imgur.com/mJz15zH.jpg",
        img2Src : "https://i.imgur.com/gH0foUn.jpg",
        img3Src: "https://i.imgur.com/UvXBJVM.jpg",
        img4Src: "https://i.imgur.com/FFKCP0o.png",
        choiceA : "1M USD",
        choiceB : "600,000 USD",
        choiceC : "120,000 USD",
        correct : "B"
    },{
        question : "Between 1874 and 1886, How many Impressionist exhibitions were held?",
        imgSrc : "https://www.sothebys.com/content/dam/stb/lots/PF1/PF1716/350PF1716_9KZB6_1.jpg",
        choiceA : "8",
        choiceB : "1",
        choiceC : "200",
        correct : "A"
    },{
        question : "What is the correct fair market value of Birth of Venus edition 7/20 ?",
        imgSrc : "https://d2mpxrrcad19ou.cloudfront.net/item_images/1088547/11343507_fullsize.jpg",
        img2Src: "https://i.pinimg.com/600x315/53/b9/06/53b9060f1f676a6d9b9479e739bc7ee9.jpg",
        img3Src: "https://www.paintingstar.com/static/gallery/2015/11/27/andy-warhol-details-of-renaissance-paintings-sandro-botticelli-birth-of-venus-1482-f-s-iib-317-s201043_thumb.jpg?Details+Of+Renaissance+Paintings+%28sandro+Botticelli%2C+Birth+Of+Venus%2C+1482%29+%28f.+%26+S.+Iib.317%29+Artwork+by+Andy+Warhol",
        img4Src: "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=400&height=275&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FjXnczlgeGGvh45U_W0jbgg%2Flarge.jpg",
        choiceA : "70,000 USD",
        choiceB : "1M USD",
        choiceC : "20M USD",
        correct : "A"
    },{
        question : "In which city was Rembrant born?",
        imgSrc : "https://miro.medium.com/max/2560/1*WvezE2LZCeRTBB83InRU9g.jpeg",
        choiceA : "Munich",
        choiceB : "Leiden",
        choiceC : "Paris",
        correct : "B"
    },{
        question : "What is the correct auction estimate for Filtration (Green) 1977 by Julian Stanczak?",
        imgSrc : "https://p1.liveauctioneers.com/1331/94077/48001162_1_x.jpg?auto=webp&format=pjpg&version=1474660451&width=310",
        img2Src: "https://bonfoeygallery.files.wordpress.com/2018/06/spectral-blue_-1975-2013_60x5072.jpg?w=343&h=417",
        img3Src: "https://p1.liveauctioneers.com/1331/62316/31108976_1_x.jpg?auto=webp&format=pjpg&version=1413219182&width=440",
        img4Src: "https://wolfsgallery.com/images/works/_huge/stanczak-conferring-blue-2.jpg",
        choiceA : "4,000-8,000 USD",
        choiceB : "20,000-40,000 USD",
        choiceC : "100,000-200,000 USD",
        correct : "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    qImg2.innerHTML = "<img src="+ q.img2Src +">";
    qImg3.innerHTML = "<img src="+ q.img3Src +">";
    qImg4.innerHTML = "<img src="+ q.img4Src +">";
    description.innerHTML = "<p>"+ q.description +"</p>";
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
    document.getElementById(runningQuestion).style.backgroundColor = "#ffffff";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#262626";
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
              "https://www.sothebys.com/content/dam/stb/lots/L19/L19006/101L19006_B89S5.jpg";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}








