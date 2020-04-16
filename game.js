
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
$("body").one("keydown",function(event){

  newSequence();

})
$(".btn").on("click",function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
  if (userClickedPattern.length===gamePattern.length) {
    setTimeout(function(){
      newSequence()
    },1000);
  }
}  else {
    var music5=new Audio("sounds/wrong.mp3");
    music5.play();
    $("h1").text("Game Over, Press Any Key to Restart" );
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    startOver();
 }
}

function startOver(){
  level=0;
  gamePattern=[];
  $("body").one("keydown",function(event){
    newSequence();

  })
}


function newSequence(){
  userClickedPattern=[];
  level++
  $("#level-title").text("level"+" " +level);
  var randomNumber=Math.floor(Math.random()*buttonColours.length);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}


 function playSound(name){
   switch (name) {
     case "blue":
         var music1= new Audio("sounds/blue.mp3");
         music1.play();
       break;
     case "green":
         var music2= new Audio("sounds/green.mp3");
         music2.play();
       break;
     case "red":
         var music3=new Audio("sounds/red.mp3");
         music3.play();
       break;
     case "yellow":
         var music4=new Audio("sounds/yellow.mp3");
         music4.play();
       break;

     default:console.log(userChosenColour);

   }
 }

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
      $("#"+currentColour).removeClass("pressed");
    },100);
}
