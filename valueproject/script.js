var highscores = $("#highscores");
var questionContainer = $("#question-container");
var startButton = $("#start-btn");
var nextButton = $("#next-btn");
var timer = $("#countdown");
var timeGauge = $("#timeGauge");
var progress = $("#progress");
var scoreContainer = $("#scoreContainer");
var photo = $("#photo");
var qImg = $("#qImg");
var description= $("#description")

 

var questions = [
  {
    question: "What is the correct fair market value of The Entombment by Paul Cézanne?",
    answers: ["70,000 USD", "20,000 USD", "120,000"],
    imgSrc: "https://i.imgur.com/THDFAX0.jpg?1",
    img2Src: "https://i.imgur.com/ezwJw7F.png",
    img3Src: "https://i.imgur.com/bH1XSGP.png",
    img4Src: "https://i.imgur.com/sZpnSJP.png",
    description: "Entombment",
    correctAnswer: 0
  },
  {
    question: "What is the correct auction estimate for Filtration (Green) 1977 by Julian Stanczak?",
    answers: ["4,000-8,000 USD", "20,000-40,000 USD", "2M-4M USD"],
    imgSrc : "https://p1.liveauctioneers.com/1331/94077/48001162_1_x.jpg?auto=webp&format=pjpg&version=1474660451&width=310",
    img2Src: "https://bonfoeygallery.files.wordpress.com/2018/06/spectral-blue_-1975-2013_60x5072.jpg?w=343&h=417",
    img3Src: "https://p1.liveauctioneers.com/1331/62316/31108976_1_x.jpg?auto=webp&format=pjpg&version=1413219182&width=440",
    img4Src: "https://wolfsgallery.com/images/works/_huge/stanczak-conferring-blue-2.jpg",
    correctAnswer: 1
  },
  {
    question: "What is the correct fair market value for Girl Holding Her Foot by Lucian Freud?",
    answers: ["20,000 USD", "1,000 USD", "2M USD"],
    imgSrc : "https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1/auctions/UK030117/21_001.jpg",
    img2Src: "https://i.imgur.com/hB12H24.jpg",
    img3Src: "https://i.imgur.com/SKHNVAg.jpg",
    img4Src: "https://i.imgur.com/pMyFPzC.jpg",
    correctAnswer: 0
  },
  {
      question: "What is the correct fair market value for Portrait of Lum A'Kao by Henri-Pierre Danloux? ",
      answers: ["$4M USD", "1,000 USD", "80,000 USD"],
      imgSrc : "https://i.imgur.com/5hwnm6F.png",
      img2Src: "https://sothebys-md.brightspotcdn.com/26/98/351693ca4f76b7761961e95002af/092n10308-b7zp9.png",
      img3Src: "https://sothebys-com.brightspotcdn.com/dims4/default/e3199bf/2147483647/strip/true/crop/1639x2000+0+0/resize/345x421!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot-migration.s3.amazonaws.com%2Ff4%2Ffd%2F02%2Ff096ae6d2581faeaa4a79a2a56a95d9e90f67ecd2ad574d54569efe76f%2F086l16037-6d3nn.jpg",
      img4Src: "https://i.imgur.com/CI9WIJk.jpg?1",
      correctAnswer: 2
    },
    {

    question: "What is the name of this painting by Grant Wood?",
    answers: ["American Dream", "American Gothic", "The Farmer and His Wife"],
    imgSrc : "https://sothebys-com.brightspotcdn.com/dims4/default/acf7ae5/2147483647/strip/true/crop/9083x11100+0+0/resize/684x836!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F4f%2F27%2F4a79a85c42748988055316a406d9%2Fgrant-wood-american-gothic.jpg",
    correctAnswer: 1
  },
  {
    question: "What is the correct fair market value of Roman Notes V by Cy Twombly?",
    answers: [
      "50,000 USD",
      "10,000 USD",
      "120,000 USD"
    ],
    imgSrc : "https://b03.deliver.odai.yale.edu/b2/1a/b21ae9ec-cc05-4c92-a79f-5a5b6c911efe/ag-obj-89500-001-pub-med.jpg",
    img2Src: "https://i.imgur.com/d7Ry6w6.jpg",
    img3Src: "https://i.imgur.com/55vmiQm.jpg?1",
    img4Src: "https://i.imgur.com/Wbr0eIw.jpg[/img",
    correctAnswer: 0
  },
  {
    question: "Who Became the official painter to Pope Julius II & Leo X?",
    answers: ["Raphael", "Brunellescchi", "Leonardo Da Vinci"],
    imgSrc : "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/head-of-a-young-apostle-raphael.jpg",
    correctAnswer: 0
  },
  {
    question: "Who painted these strawberries?",
    answers: ["Pierre-Auguste Renoir,", "Marc Chagall", "Lucian Freud"],
    imgSrc : "https://www.sothebys.com/content/dam/stb/lots/L17/L17007/L17007_9HK2Q_web.jpg",
    correctAnswer: 2
  },
  {
    question: "What is the Correct fair market value for Flowers Sent as a Gift by David Hockney?",
    answers: [
      "1M USD",
      "20M USD",
      "7M USD"
    ],
    imgSrc : "https://i.imgur.com/7E5yABH.png?1",
    img2Src : "https://i.imgur.com/NXZek53.png",
    img3Src : "https://i.imgur.com/aUnHIUv.jpg?1",
    img4Src : "https://i.imgur.com/1tKTgYV.jpg?1",
    correctAnswer: 2
  },
  {
    question: "How many haystack paintings by Monet exist?",
    answers: ["2", "38", "12"],
    imgSrc : "https://sothebys-com.brightspotcdn.com/dims4/default/4238589/2147483647/strip/true/crop/2000x1564+0+0/resize/1151x900!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2F43%2Fcf%2F2e1949614262aefa6c378cb70a28%2F089n10067-3y7gy.jpg",
    correctAnswer: 1
  },
  { 
      question: "What is the correct fair market value for Jeans, Albert Oehlen?",
   answers: ["1M USD", "600,000 USD", "120,000 USD"],
   imgSrc : "https://i.imgur.com/mJz15zH.jpg",
   img2Src : "https://i.imgur.com/gH0foUn.jpg",
   img3Src: "https://i.imgur.com/UvXBJVM.jpg",
   img4Src: "https://i.imgur.com/FFKCP0o.png",
   correctAnswer: 1
  },
  { 
      question: "What is the correct retail replacement value of Sunset Nude with Red Stockings by Tom Wesselmann?",
   answers: ["1M USD", "10M USD", "10,000 USD"],
   imgSrc : "https://www.christies.com/img/LotImages/2010/NYR/2010_NYR_02356_0181_000(tom_wesselmann_sunset_nude_with_red_stockings073259).jpg",
   img2Src : "https://www.christies.com/img/LotImages/2014/NYR/2014_NYR_02892_0321_000(tom_wesselmann_sunset_nude_7115925).jpg",
   img3Src: "https://www.christies.com/img/LotImages/2006/NYR/2006_NYR_01726_0162_000().jpg",
   img4Src: "https://i.imgur.com/9EmhfHw.png",
   correctAnswer: 0
  },
  { 
    question: "Between 1874 and 1886, How many Impressionist exhibitions were held?",
 answers: ["8", "1", "200"],
 imgSrc : "https://www.sothebys.com/content/dam/stb/lots/PF1/PF1716/350PF1716_9KZB6_1.jpg",
 img2Src : "",
 img3Src: "",
 img4Src: "",
 correctAnswer: 0
},
{ 
    question: "In which city was Rembrant born?",
 answers: ["Munich", "Leiden", "Paris"],
 imgSrc : "https://miro.medium.com/max/2560/1*WvezE2LZCeRTBB83InRU9g.jpeg",
 img2Src: "https://sothebys-com.brightspotcdn.com/dims4/default/b4512c5/2147483647/strip/true/crop/2438x3307+0+0/resize/684x928!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Fde%2F18%2Fdcfa502c475a821e31361c98e44d%2Frembrandt-van-rijn-self-portrait-wearing-a-ruff-and-black-hat-1632-est.%20%C2%A312-16%20million.jpg",
 img3Src: "https://sothebys-com.brightspotcdn.com/dims4/default/f3eaa33/2147483647/strip/true/crop/1700x1700+576+719/resize/1200x1200!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Ffe%2Fd9%2Fbf49a07346b3b495a746fbb309de%2Frembrandt-zelfportret-1640.jpg",
 img4Src: "https://news.artnet.com/app/news-upload/2019/04/Rembrandt-Self-portrait-with-Two-Circles-850x1024.jpg",
correctAnswer: 1
},
{ 
    question: "What is the correct fair market value of Birth of Venus edition 7/20 ?",
 answers: ["70,000 USD", "1M USD", "20M USD"],
 imgSrc : "https://d2mpxrrcad19ou.cloudfront.net/item_images/1088547/11343507_fullsize.jpg",
 img2Src: "https://i.pinimg.com/600x315/53/b9/06/53b9060f1f676a6d9b9479e739bc7ee9.jpg",
 img3Src: "https://www.paintingstar.com/static/gallery/2015/11/27/andy-warhol-details-of-renaissance-paintings-sandro-botticelli-birth-of-venus-1482-f-s-iib-317-s201043_thumb.jpg?Details+Of+Renaissance+Paintings+%28sandro+Botticelli%2C+Birth+Of+Venus%2C+1482%29+%28f.+%26+S.+Iib.317%29+Artwork+by+Andy+Warhol",
 img4Src: "https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=400&height=275&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FjXnczlgeGGvh45U_W0jbgg%2Flarge.jpg",
correctAnswer: 0

},
{ 
    question: "What is the correct fair market value for Winslow Homer's Snap the Whip ?",
 answers: ["1M USD", "3M USD", "100M USD"],
 imgSrc : "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11140/34221/main-image",
 img2Src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Winslow_Homer_-_Children_on_the_beach_%281873%29.jpg",
 img3Src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Winslow_Homer_-_Sounding_Reveille_%281871%29.jpg/1200px-Winslow_Homer_-_Sounding_Reveille_%281871%29.jpg",
 img4Src: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Winslow_Homer_-_In_Charge_of_Baby.jpg",
correctAnswer: 1

}

];

// amount of time per question
var timeLeft = 15 * questions.length;
const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var score = 0;

//hide start page when start button is clicked
$("#start-btn").click(function() {
  $("#opener").hide();
  renderQuestion(questions[quizIndex]);
  //timer
  var timerInterval = setInterval(function() {
    timeLeft--;
    console.log("hello")
    console.log(timeLeft)
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      location.reload();
    }
    timer.text("Time Left: " + timeLeft);
  }, 1000);
});

var quizIndex = 0;





function renderQuestion(q) {
    runningQuestion++ 
  var questionElement = document.createElement("div");
  questionElement.classList.add("newClass");
  questionElement.innerHTML = q.question;
  $('#qImg').html("<img src="+ q.imgSrc +">");
  $('#qImg2').empty();
  $('#qImg3').empty();
  $('#qImg4').empty();
  $('#description').empty();
  
  questionContainer.append(questionElement);

  if(q.hasOwnProperty("img2Src")) {
    $('#qImg2').html("<img src="+ q.img2Src +">");
  }
  if(q.hasOwnProperty("img3Src")) {
    $('#qImg3').html( "<img src="+ q.img3Src +">");
  }
  if(q.hasOwnProperty("img4Src")) {
    $('#qImg4').html( "<img src="+ q.img4Src +">");
  }
  if(q.hasOwnProperty("description")) {
    $('#description').html("<p>"+ q.description +"</p>");
  }
 
  
  //   questions.append(img2Src);
  // }else{
  //   if (questions[img2Src] === null || isEmpty(questions[img2Src]))
  //   delete questions[img2Src];
  // }
  console.log(questions[0].img2Src)



  for (var i = 0; i < q.answers.length; i++) {
    var createButton = document.createElement("button");
    createButton.classList.add("newClass");
    createButton.textContent = q.answers[i];
    questionContainer.append(createButton);

    if (i === q.correctAnswer) {
        score++
      createButton.onclick = function() {
        quizIndex++;
        $(".newClass").replaceWith(questions[quizIndex]);
        

        

        // once we hit the last question, will go to highscore page
        if (quizIndex === questions.length) {
          window.location.href = "highscore.html";
          //saving to local storage
        //   localStorage.setItem("mostRecentScore", timeLeft);
          localStorage.setItem("mostRecentScore", timeLeft);
          console.log(  localStorage.getItem("mostRecentScore"))
          localStorage.setItem("numQuestions", questions.length)
        }
        // renders the next question
        renderQuestion(questions[quizIndex]);
      };
    } else {
      createButton.onclick = function() {
        console.log("hi")
        timeLeft -= 5;
        console.log(timeLeft)
        alert("Wrong! You lost 5 seconds");
      };
    }
  }


  }
