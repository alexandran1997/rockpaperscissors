//$(".play").click(function() {
  let userInput;
  let userRPS;
  
  
  let computerRPS;
  
  let WinState;
  
  userInput = $(".input").val();
  userRPS = "<p>" + userInput + "</p>";
  $(".userChoice").append(userRPS);
  

                 
 //DAY 2
                 
$(".play").click(function() {
  let Choice = $(".input").val();
  $(".userChoice").text(Choice);
  
});               

$(".play").click(function() {
  let computerInput = Math.random();
  computerInput = $(".computerChoice").text(`${computerInput}`);
});