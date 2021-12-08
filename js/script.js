//$(".play").click(function() {
  let userInput;
  let userRPS;
  
  
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

//DAY 3 - Make computer choice to a string

$(".play").click(function() {
  let computerReply = Math.random();
  let computerReplyString;

  
  if (computerReply <= 1) {
    let computerReplyString = "paper";
    
  }
  
  else if (computerReply === 1) {
   let computerReplyString = "rock";
  }
  
    else {
      let computerReplyString = "scissors";
    }
   
  
  
});

