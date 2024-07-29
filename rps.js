
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let valueRPS = getRandomInt(3);


function getComputerchoice(){
  if(valueRPS==0){
      return  "rock" 
  }
  if(valueRPS==1){
      return  "paper" 
  }
  if(valueRPS==2){
      return "scissor" 
  };
};




function getHumanChoice() {
  let choice = prompt('enter your fucking choice dewd' );
  choice = choice.toLowerCase();
  return choice;
}
// rounds and declaring scores

let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerchoice();



function playRound(humanChoice, computerChoice) {
    if(humanChoice == 'rock' && computerChoice == 'paper') {
      console.log("Comp wins")
      computerScore++;
    };
    if(humanChoice == 'rock' && computerChoice === 'scissor'){
      console.log("You win")
      humanScore++;
    }
    if(humanChoice == 'paper' && computerChoice === 'scissor'){
      console.log("Comp wins")
      computerScore++;
    }
    if(humanChoice == 'paper' && computerChoice === 'rock'){
      console.log("You win")
      humanScore++;
    }
    if(humanChoice == 'scissor' && computerChoice === 'paper'){
      console.log("You win")
      humanScore++;
    }
    if(humanChoice == 'scissor' && computerChoice === 'rock'){
      console.log("Comp wins")
      computerScore++;
    }
    else{
      console.log("tie")
    };

  }
  

  



