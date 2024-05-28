// function to get user's choice 
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: Invalid Input. Please choose Rock, Papep, Scissors');
  }
};

// Function to get computer's choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
};

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is tie';
  }

// if the game is not a tie, determining the winner
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Computer won the game.';
    } else {
      return 'You won the game.';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return 'Computer won the game.';
    } else {
      return 'You won the game.';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return 'Computer won the game.';
    } else {
      return 'You won the game';
    }
  }

  if (userChoice === 'bomb') {
    return 'User won with a secret cheat code!!'
    }
};


const playGame = () => {
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer Choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
