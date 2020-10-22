For my appraisal game projecct I used jquery and javascript to create a basic quiz. The questions in my quiz were created by making an array of obejects, with each object containing a unique question I then researched online how to use a function to add iamges to objects in an array, and after testing out several different methods and getting help in class and with the TA's, I was able to succesfully add images to the questions. 

I wanted the score keeping method to be something realistic to the profession of art appraising, so rather than having points added or taken away based on question answers, I used if statements and functions to create the rules of the game so that 15 seconds were given for each question at the start of the game, and 5 seconds were taken away each time someone got a question wrong, with a popup window alerting the player of what was happening. I tried to have the score calculated based on the amount of seconds remaining compared to the amount of seconds the player starts with, but I am not sure if I did this correctly because when I tried to have it display a percentage it came up as 100% score regardless of how many questions answered correctly, and I tried to change it to a score based on the number of seconds remaining without a percentage and I am not sure if this worked either. I got the idea from a youtube video about how to code a quiz in javascript to then have a different picture displayed on a score page depending on the amount of questions answered correctly. The quiz in the youtube video from "codeexplained" was written in Javascript so I rewrote it in jquery. I know this part works and I am satisfied with the setup of the high score page, but I would like some feedback on how to accurately fix my score calculating method. I came up with the idea for the highscore page by googling ideas for quiz endings in codings, and because I was unsatisfied with the blank page that came up after the end of the quiz. I used resources on mozilla.org to figure out how to make a local storage and a high score page, and found that I would have to link an additional js file to do so. I tried my best to do a combination of several youtube videos for making high score game pages and reading mozilla articles on local storage to make a high score page. I then attended TA hours every day last week and with the help of Glenn and Eric, I was able to sucessfully connet the two js pages and link them up to my jquery logic for adding a different picture depending on the score.

I used bootstrap layout to create my buttons and overall layout, using the simple "cover" example which was free on the website. I got inspiration for my design ideas by looking at art auction websites and online art galleries. The inspiration for my layout also came from the method of writing an art appraisal, where the document starts with and image of the item being apprasied and then follows with smaller images of comparables. I plan to redesign the UX of my website by formating the comparable images in a more intuitive way. I have been researcching how to make an image slide show with left and right buttons to browse photos in a gallery and think I might use this format to add the three comparable images under each item being appraised. I currently am not satisfied with the irregularity of the sizes and the disorganization. Other image formats I am exploring is using a lightbox where you can click on the image and a zoomed in version will pop up on the screen, I am not sure if this would be too complicated or distract from the game but I do want to create some kind of zoom in feature on the images. I decided to make the description of the comparables in a moving banner across the screen as a last resort because I was not able to figure out doing an image overlay with text which would activate with mouse hover, which was my original idea. I found an example of a moving image banner like the one I created in CSS by browsing websites such as CSS tricks and codepen. Since friday I have done more research on website template apps such as bootstrap and online, and I now think I know of a way to add the images through js file in a more intuitive format like an image slider. I plan to make these changes soon. I was also thinking of adding fun facts about the artist in a flash animation at the top of the page if the player gets a question right, but have not yet researched ways of implementing this.

The game is based on the art appraisal program that I completed this past summer 2020.I thought it would be a fun game to make that would also be very useful for my fellow art appraisers to study their past research and strengthen their knowledge of important art appraisals.

 I also thought this project would be a great opportunity to feature my skills and art knowledge, because a future goal of mine would be to work in web development for an art database company, museum, or online auctions.

Sources I used for inspiration and information:

Mozilla.org
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://www.youtube.com/watch?v=1mmAF8euvBI
https://www.khanacademy.org/computing/computer-programming/html-js-jquery/form-processing-jquery/pc/challenge-jquery-trivia-quiz
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
https://stackoverflow.com/questions/4464406/creating-a-quiz-with-jquery
https://www.w3schools.com/jquery/jquery_quiz.asp
https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
https://www.youtube.com/watch?v=no-Ntkc836w
https://codeactually.com/interactivequiz.html
https://www.youtube.com/watch?v=C7NsIRhoWuE


design inspiration: 
https://99designs.com/blog/trends/web-design-trends/
https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/11/Screen-Shot-2018-11-15-at-12.39.05-PM.png?auto=format&q=60&fit=max&w=930

bootstrap template used:
https://getbootstrap.com/docs/4.0/examples/cover/

videos watched to figure out bootstrap:
https://www.youtube.com/watch?v=no-Ntkc836w



csstricks.com
animista.com
codepen.com

books:
eloquent javascript markin haverbeke
javascript for kids by max wainwright
jquery cheatsheet