window.onload = function () {
  
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea   = document.getElementsByClassName('answers')[0],
        checker      = document.getElementsByClassName('checker')[0],
        current      = 0,
    
       // An object that holds all the questions + possible answers.
       // In the array --> last digit gives the right answer position
        allQuestions = {
          'What is the Correct fair market value for "Flowers Sent as a Gift" by David Hockney?' : ['7M USD', '2M USD', '5M USD', 0],
          
          'Second Question (Paul Cézanne)' : ['20,000 USD', '70,000 USD' , '120,000 USD', 1],
          
          'Third Question (Cy Twombly) ' : ['10,000 USD', '50,000 USD', '50,000 USD', 1],

          'Fourth Question What is the name of this painting by Grant Wood?' : ['American Dream', 'American Gothic', 'The Farmer and his Wife', 1],

          'Fifth Question Who Became the official painter to Pope Julius II & Leo X?' : ['Raphael', 'Leonardo da Vinci', 'Brunellescchi', 1]
        };
        
    function loadQuestion(curr) {
    // This function loads all the question into the questionArea
    // It grabs the current question based on the 'current'-variable
    
      var question = Object.keys(allQuestions)[curr];
      
      questionArea.innerHTML = '';
      questionArea.innerHTML = question;    
    }
    
    function loadAnswers(curr) {
    // This function loads all the possible answers of the given question
    // It grabs the needed answer-array with the help of the current-variable
    // Every answer is added with an 'onclick'-function
    
      var answers = allQuestions[Object.keys(allQuestions)[curr]];
      
      answerArea.innerHTML = '';
      
      for (var i = 0; i < answers.length -1; i += 1) {
        var createDiv = document.createElement('div'),
            text = document.createTextNode(answers[i]);
        
        createDiv.appendChild(text);      
        createDiv.addEventListener("click", checkAnswer(i, answers));
        
        
        answerArea.appendChild(createDiv);
      }
    }
    
    function checkAnswer(i, arr) {
      // This is the function that will run, when clicked on one of the answers
      // Check if givenAnswer is sams as the correct one
      // After this, check if it's the last question:
      // If it is: empty the answerArea and let them know it's done.
      
      return function () {
        var givenAnswer = i,
            correctAnswer = arr[arr.length-1];
        
        if (givenAnswer === correctAnswer) {
          addChecker(true);             
        } else {
          addChecker(false);                        
        }
        
        if (current < Object.keys(allQuestions).length -1) {
          current += 1;
          
          loadQuestion(current);
          loadAnswers(current);
        } else {
          questionArea.innerHTML = 'Done';
          answerArea.innerHTML = '';
        }
                                
      };
    }
    
    function addChecker(bool) {
    // This function adds a div element to the page
    // Used to see if it was correct or false
    
      var createDiv = document.createElement('div'),
          txt       = document.createTextNode(current + 1);
      
      createDiv.appendChild(txt);
      
      if (bool) {
        
        createDiv.className += 'correct';
        checker.appendChild(createDiv);
      } else {
        createDiv.className += 'false';
        checker.appendChild(createDiv);
      }
    }
    
    
    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);
    
  };

  $(function(){
	var slider = $("#slider");
	var curSlide = $(".slides li.current");
	var glitchLine = $("<div id='glitchline'><img></div>");
	var imgUrl = curSlide.find("img").attr("src");
	var glitchImg = glitchLine.find("img");
	glitchImg.attr("src",imgUrl);
	glitchLine.appendTo(slider);
	var ttop = Math.round(Math.random() * (slider.height() - glitchLine.height()));
	glitchLine.css("top",ttop + "px");
	glitchImg.css("margin-top",-ttop + "px");
	var glitchMoveInt;
	var glitchInt = setInterval(function(){
		if(glitchMoveInt){
			clearInterval(glitchMoveInt);
		} 
		var top = Math.round(Math.random() * (slider.height() - glitchLine.height()));
		glitchLine.css("top",top + "px");
		glitchImg.css("margin-top",-top + "px");
		glitchLine.toggleClass("glitchLineColored");
		glitchMoveInt = setInterval(function(){
			var leftMove = Math.round(Math.random() * 20 -10);
			var top = glitchLine.css("top");
			glitchImg.css({marginLeft : leftMove + "px",marginTop : -parseInt(top) + "px"});
		},100);
	},1000);
	setInterval(nextSlide,5000);
	function nextSlide(){
		var curSlide = $(".slides li.current");
		var nxtSlide = curSlide.next();
		if(nxtSlide.length === 0){
			nxtSlide = $(".slides li:first");
		}
		curSlide.removeClass("current");
		nxtSlide.addClass("current");
		glitchImg.attr("src",nxtSlide.find("img").attr("src"));
		$("#slideNoise").show();
		setTimeout(function(){
			$("#slideNoise").hide();
		},300);
	}
});