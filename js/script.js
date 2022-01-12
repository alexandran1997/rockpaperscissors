
  
  //DAY 5 (LAST DAY) - Use parameters and arguments
$(".play").click(function() {
  
  let computerReply = Math.random() * 3;
  let userRPS = $(".input").val();
  
  $("userChoice").text(userRPS);
  $(".result"). text("");
  
  let computerChoice = "No Choice";
  if (computerReply >= 1 && computerReply <= 2) {
    computerChoice = "Paper";
  }
  else if (computerReply < 1) {
    computerChoice = "Scissors";
  }
  else 
  computerChoice = "Rock"
}

$(".computerChoice").text(computerChoice);
  
  let result = "";
  if (userRPS === computerChoice) {
    result = "Tie!";
  } else if {
    (userRPS === "Paper" && computerChoice === "Scissors") 
    result = "You lose.";
  } else if {
    (userRPS === "Rock" && computerChoice === "Paper") 
    result = "You lose.";
  } else if {
    (userRPS === "Scissors" && computerChoice === "Rock") 
    result = "You lose.";
  } else {
    result = "You win!!";
  }
  
  $(".result").text(result);
  
});
