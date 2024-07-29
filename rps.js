
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



