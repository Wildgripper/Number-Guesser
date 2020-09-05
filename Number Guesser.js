let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {     
    if(!(humanGuess >= 0 && humanGuess <=9)) {
      alert('Out of range!');
      return false
    }
    
    return getAbsoluteDistance(humanGuess, secretTarget) > getAbsoluteDistance(computerGuess, secretTarget) ? false : true;
}
    

const updateScore = winner => {
  if(winner === 'human') {
    humanScore += 1;
  } else if(winner === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => currentRoundNumber += 1;

const getAbsoluteDistance = (number1, number2) => Math.abs(number1 - number2);

console.log(compareGuesses(48, 1, 2));
