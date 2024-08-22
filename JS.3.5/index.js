//Go to the instructions.md file first thing!
let computerChoice
let result
function rockPaperScissors(choice){
  random = Math.floor(Math.random() * 3);
  if (random === 0) {
    computerChoice = 'rock'
  }
  if (random === 1) {
    computerChoice = 'scissors'
  }

  if (random === 2) {
    computerChoice = 'paper'
  }
  if (computerChoice === choice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && choice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && choice === "scissors") {
    result = 'you lost!'
  }
  if (computerChoice === 'paper' && choice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && choice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && choice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && choice === "paper") {
    result = 'you lose!'
  }
return result;
}
console.log(rockPaperScissors("rock"));