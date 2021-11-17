$(".play").click(function() {
  let userInput;
  let userRPS;
  
  let computerInput;
  let computerRPS;
  
  let WinState;
  
  userInput = $(".input").val();
  userRPS = "<p>" + userInput + "</p>";
  $(".userChoice").append(userRPS);
  
}
