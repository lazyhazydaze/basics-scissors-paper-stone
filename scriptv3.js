// ======================= Project 1: Scissors, Paper, Stone - Helper Functions =======================
// input = string, "scissors" or "paper" or "stone"

// Create a function to generate a random action of scissors, paper or stone for the computer
var generateRandomAction = function () {
  // Create a function to generate a random number from 1 to 3 inclusive
  // Generate a decimal from 0 through 3, inclusive of 0 and exclusive of 3.
  var randomDecimal = Math.random() * 3;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 2 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 3 inclusive.
  var randomNum = randomInteger + 1;

  // Assign a numerical value to an action i.e. 1 - scissors, 2 - paper, 3 - stone
  if (randomNum == 1) {
    return "scissors";
  }

  if (randomNum == 2) {
    return "paper";
  }

  if (randomNum == 3) {
    return "stone";
  }
};

// ======================= Project 1 Part 1: Scissors, Paper, Stone - Code - V1 =======================
/*
var main = function (userAction) {
  var randomNum = randomNumGenerator();
  var computerAction = randomAction(randomNum);

  // Create a variable for output
  var myOutputValue;

  // Create a condition to validate the input
  if (
    !(
      userAction == "scissors" ||
      userAction == "paper" ||
      userAction == "stone"
    )
  ) {
    myOutputValue = `Something wrong? <br><br> Type in one of the following: <br> scissors, paper, stone. <br><br> Note: Inputs are case sensitive`;
  }

  // Create "Draw" condition - Output "draw" if userAction is same as computerAction
  else if (userAction == computerAction) {
    myOutputValue = `It's a draw. <br><br> Player: ${userAction} <br> Computer: ${computerAction}`;
  }

  // Create "Win" condition for user
  // Output "user wins" if
  // User: Scissors AND Computer: Paper OR
  // User: Paper AND Computer: Stone OR
  // User: Stone AND Computer: Scissors
  else if (
    (userAction == "scissors" && computerAction == "paper") ||
    (userAction == "paper" && computerAction == "stone") ||
    (userAction == "stone" && computerAction == "scissors")
  ) {
    myOutputValue = `Player wins! <br><br> Player: ${userAction} <br> Computer: ${computerAction}`;
  }

  // Create "Win" condition for computer
  else {
    myOutputValue = `Computer wins! <br><br> Player: ${userAction} <br> Computer: ${computerAction}`;
  }

  // Return output value
  return myOutputValue;
};
*/
// ======================= Project 1 Part 1: Scissors, Paper, Stone - Code - V2 =======================

// Refactor the code in Part 1 V1: Create a helper function for game rules: win, draw, lose
// For player to win, player and computer must choose one of the following combo, in the following order respectively (i.e. player and computer): scissors and paper, paper and stone, stone and scissors
// input1 = userAction, input2 = computerAction

/*
var spsBasicPart1 = function (playerInput, computerInput) {
  // create a variable for the output
  var result;

  // Create a condition so that player can win
  if (
    (playerInput == "scissors" && computerInput == "paper") ||
    (playerInput == "paper" && computerInput == "stone") ||
    (playerInput == "stone" && computerInput == "scissors")
  ) {
    result = `Player wins! <br><br> Player: ${playerInput} <br> Computer: ${computerInput}`;
  }

  // Create a condition so that player draws with computer
  else if (playerInput == computerInput) {
    result = `It's a draw. <br><br> Player: ${playerInput} <br> Computer: ${computerInput}`;
  }

  // Create a condition so that player loses to the computer
  else {
    result = `Computer wins! <br><br> Player: ${playerInput} <br> Computer: ${computerInput}`;
  }

  //return output value
  return result;
};
*/
// Place helper function code into main code for game play
/*
var main = function (userAction) {
  var computerAction = generateRandomAction();

  // Create a variable for output
  var myOutputValue;

  // Create a condition to check that input is valid
  if (
    !(
      userAction == "scissors" ||
      userAction == "paper" ||
      userAction == "stone"
    )
  ) {
    myOutputValue = `Invalid input? <br><br> Type in one of the following: <br> scissors, paper, stone. <br><br> Note: Inputs are case sensitive`;
  }

  // If the input is valid, proceed to run game
  else {
    myOutputValue = spsBasicPart1(userAction, computerAction);
  }

  // Return output value
  return myOutputValue;
};
*/

// ======================= Project 1 Part 2: Scissors, Paper, Stone =======================
// ======================= Win-Loss Record =======================
// Create global variables to store:
//  total number of games played
//  number of times player won
//  number of times computer won
//  number of draws
var numGamesPlayed = 0;
var numPlayerWins = 0;
var numComputerWins = 0;
var numDraws = 0;

// Create a helper function to calculate percentage of win rate
var calcPercentage = function (input1, input2) {
  return (input1 / input2) * 100;
};

// [FORMATTING] Create a function to format/personlise the output value according to the results of the game
var withEmoji = function (input) {
  if (input == "scissors") {
    return "scissors ✌️";
  }

  if (input == "paper") {
    return "paper ✋";
  }

  if (input == "stone") {
    return "stone 👊";
  }
};

// [FORMATTING] Create a function to format/personlise the output value according to the results of the game
var playerPerformance = function (name, input) {
  if (input <= 30) {
    return `Kinda meh, ${name}. 😒 Keep trying!`;
  }

  if (input > 30 && input < 70) {
    return `Not too bad ${name}! 💪`;
  } else {
    return `Wow ${name} you are a PRO 😄`;
  }
};

// Create a function to track the results of the game
var gameTracker = function (user) {
  return `Games played: ${numGamesPlayed} <br> ${user} wins: ${numPlayerWins}  (Win rate: ${calcPercentage(
    numPlayerWins,
    numGamesPlayed
  )}% ) <br> 
  Computer wins: ${numComputerWins} (Win rate: ${calcPercentage(
    numComputerWins,
    numGamesPlayed
  )}% ) <br> 
  Draws: ${numDraws} <br><br> ${playerPerformance(
    user,
    calcPercentage(numPlayerWins, numGamesPlayed)
  )} `;
};

var box = document.querySelector("#container");

// Create a helper function for game rules of basic/regular scissors paper stone that includes score keeping
var spsBasicPart2 = function (nameOfUser, playerInput, computerInput) {
  // create a variable for the output
  var result;

  // Create a condition so that player can win. When player wins, update player win count by 1.
  if (
    (playerInput == "scissors" && computerInput == "paper") ||
    (playerInput == "paper" && computerInput == "stone") ||
    (playerInput == "stone" && computerInput == "scissors")
  ) {
    numPlayerWins += 1;
    box.style.backgroundColor = "green";
    result = `${nameOfUser} wins! <br><br> ${nameOfUser}: ${withEmoji(
      playerInput
    )} <br> Computer: ${withEmoji(computerInput)} <br><br> ${gameTracker(
      nameOfUser
    )}`;
  }

  // Create a condition so that player draws with computer. When draw, update draw count by 1.
  else if (playerInput == computerInput) {
    numDraws += 1;
    box.style.backgroundColor = "pink";
    result = `It's a draw. <br><br> ${nameOfUser}: ${withEmoji(
      playerInput
    )} <br> Computer: ${withEmoji(computerInput)} <br><br> ${gameTracker(
      nameOfUser
    )}`;
  }

  // Create a condition so that player loses to the computer. When computer wins, update computer win count by 1.
  else {
    numComputerWins += 1;
    box.style.backgroundColor = "red";
    result = `Computer wins! <br><br> ${nameOfUser}: ${withEmoji(
      playerInput
    )} <br> Computer: ${withEmoji(computerInput)} <br><br> ${gameTracker(
      nameOfUser
    )}`;
  }

  //return output value
  return result;
};

// Create a main function for the game play of regular SPS. Insert the helper function of regular SPS into the main function.
var playSpsBasic = function (userName, userAction) {
  var computerAction = generateRandomAction();

  // Create a variable for output
  var myOutputValue;

  // Create a condition to check that input is valid
  if (
    !(
      userAction == "scissors" ||
      userAction == "paper" ||
      userAction == "stone"
    )
  ) {
    myOutputValue = `Invalid input, ${userName}? <br><br> Type in one of the following: <br> scissors, paper, stone. <br><br> Note: Inputs are case sensitive`;
  }

  // If the input is valid, proceed to run game. Update the play count by 1.
  else {
    numGamesPlayed += 1;
    myOutputValue = spsBasicPart2(userName, userAction, computerAction);
  }

  // Return output value
  return myOutputValue;
};
// ======================= User Name =======================
// Once user submits name, program return output to prompt user to enter "scissors", "paper" or "stone"
/*
var currentGameMode = "Player to enter username";
var playerName;

var main = function (input) {
  var modeResult;

  if (currentGameMode == "Player to enter username") {
    playerName = input;
    currentGameMode = "Play SPS Basic";
    modeResult = `Hi ${playerName}. Enter "scissors", "paper" or "stone" to begin the game.`;
  } else if (currentGameMode == "Play SPS Basic") {
    modeResult = playSpsBasic(playerName, input);
  }
  return modeResult;
};
*/
// ======================= Reverse Game Mode =======================

// Create a helper function for game rules of reverse scissors paper stone
var spsReverse = function (nameOfUser, playerInput, computerInput) {
  // create a variable for the output
  var result;

  // Create a condition so computer wins. When computer wins, update computer win counter by 1.
  if (
    (playerInput == "scissors" && computerInput == "paper") ||
    (playerInput == "paper" && computerInput == "stone") ||
    (playerInput == "stone" && computerInput == "scissors")
  ) {
    numComputerWins += 1;
    box.style.backgroundColor = "red";
    result = `Computer wins! <br><br> ${nameOfUser}: ${withEmoji(
      playerInput
    )} <br> Computer: ${withEmoji(computerInput)} <br><br> ${gameTracker(
      nameOfUser
    )}`;
  }

  // Create a condition so that player draws with computer. When draw, update draw count by 1.
  else if (playerInput == computerInput) {
    numDraws += 1;
    box.style.backgroundColor = "pink";
    result = `It's a draw. <br><br> ${nameOfUser}: ${withEmoji(
      playerInput
    )} <br> Computer: ${withEmoji(computerInput)} <br><br> ${gameTracker(
      nameOfUser
    )}`;
  }

  // Create a condition so player wins. When player, wins, update player win counter by 1.
  else {
    numPlayerWins += 1;
    box.style.backgroundColor = "green";
    result = `${nameOfUser} wins! <br><br> ${nameOfUser}: ${withEmoji(
      playerInput
    )} <br> Computer: ${withEmoji(computerInput)} <br><br> ${gameTracker(
      nameOfUser
    )}`;
  }

  //return output value
  return result;
};

// Create a main function for the game play of reverse SPS. Insert helper function of reverse SPS into main function for game play
var playSpsReverse = function (userName, userAction) {
  var computerAction = generateRandomAction();

  // Create a variable for output
  var myOutputValue;

  // Create a condition to check that input is valid
  if (
    !(
      userAction == "scissors" ||
      userAction == "paper" ||
      userAction == "stone"
    )
  ) {
    myOutputValue = `Invalid input, ${userName}? <br><br> Type in one of the following: <br> scissors, paper, stone. <br><br> Note: Inputs are case sensitive`;
  }

  // If the input is valid, proceed to run game. Update the play count by 1.
  else {
    numGamesPlayed += 1;
    myOutputValue = spsReverse(userName, userAction, computerAction);
  }

  // Return output value
  return myOutputValue;
};

var currentWinner = 0;

var playMJP = function (userName, playerMove) {
  var computerMove = generateRandomAction();
  var myOutputValue = `${userName}: ${withEmoji(
    playerMove
  )}<br> Computer: ${withEmoji(computerMove)}`;
  if (
    (playerMove == "scissors" && computerMove == "paper") ||
    (playerMove == "paper" && computerMove == "stone") ||
    (playerMove == "stone" && computerMove == "scissors")
  ) {
    box.style.backgroundColor = "pink";
    currentWinner = "Player";
    myOutputValue += `<br><br>${userName}: 묵!찌!빠!`;
  } else if (playerMove == computerMove) {
    if (currentWinner == 0) {
      box.style.backgroundColor = "pink";
      myOutputValue += `<br><br>First throw's a tie! Throw again.`;
    } else if (currentWinner == "Player") {
      numPlayerWins += 1;
      numGamesPlayed += 1;
      box.style.backgroundColor = "green";
      currentWinner = 0;
      myOutputValue += `<br><br>${userName} wins! <hr> ${userName} wins ${numPlayerWins} of ${numGamesPlayed} rounds.`;
    } else if (currentWinner == "Computer") {
      numGamesPlayed += 1;
      box.style.backgroundColor = "red";
      currentWinner = 0;
      myOutputValue += `<br><br>${userName} loses! <hr> ${userName} wins ${numPlayerWins} of ${numGamesPlayed} rounds.`;
    }
  } else {
    box.style.backgroundColor = "pink";
    currentWinner = "Computer";
    myOutputValue += `<br><br>Computer: 묵!찌!빠!`;
  }
  return myOutputValue;
};

// Create game mode that allows user to enter username, store it, and select game mode.
// Create global variables to store game mode and player username.
var currentGameMode = "Player to enter username";
var playerName;

document.getElementById("regular-button").style.display = "none";
document.getElementById("reverse-button").style.display = "none";
document.getElementById("koreansps-button").style.display = "none";
document.getElementById("scissors-button").style.display = "none";
document.getElementById("paper-button").style.display = "none";
document.getElementById("stone-button").style.display = "none";

var main = function (input) {
  var modeResult;

  if (currentGameMode == "Player to enter username") {
    playerName = input;
    currentGameMode = "Player to choose game mode";
    modeResult = `Hi ${playerName}. Choose your mode.`;
    document.getElementById("regular-button").style.display = "";
    document.getElementById("reverse-button").style.display = "";
    document.getElementById("koreansps-button").style.display = "";
  } else if (currentGameMode == "Player to choose game mode") {
    if (!(input == "regular" || input == "reverse" || input == "korean sps")) {
      modeResult = `Invalid input. <br> Key in either "regular" or "reverse" <br><br> NOTE: Inputs are case sensitive!`;
    } else if (input == "regular") {
      currentGameMode = "Play SPS Regular";
      console.log("regular?", currentGameMode);
      modeResult = `You are in Regular mode. <br> Enter "scissors", "paper" or "stone" to play.`;
      document.getElementById("regular-button").style.display = "none";
      document.getElementById("reverse-button").style.display = "none";
      document.getElementById("koreansps-button").style.display = "none";
      document.getElementById("scissors-button").style.display = "";
      document.getElementById("paper-button").style.display = "";
      document.getElementById("stone-button").style.display = "";
    } else if (input == "reverse") {
      currentGameMode = "Play SPS Reverse";
      modeResult = `You are in Reverse mode. <br> Enter "scissors", "paper" or "stone" to play.`;
      document.getElementById("regular-button").style.display = "none";
      document.getElementById("reverse-button").style.display = "none";
      document.getElementById("koreansps-button").style.display = "none";
      document.getElementById("scissors-button").style.display = "";
      document.getElementById("paper-button").style.display = "";
      document.getElementById("stone-button").style.display = "";
    } else if (input == "korean sps") {
      currentGameMode = "Play SPS Korean";
      modeResult = `You are playing 묵!찌!빠! <br> Enter "scissors", "paper" or "stone" to play.`;
      document.getElementById("regular-button").style.display = "none";
      document.getElementById("reverse-button").style.display = "none";
      document.getElementById("koreansps-button").style.display = "none";
      document.getElementById("scissors-button").style.display = "";
      document.getElementById("paper-button").style.display = "";
      document.getElementById("stone-button").style.display = "";
    }
  } else if (currentGameMode == "Play SPS Regular") {
    modeResult = playSpsBasic(playerName, input);
  } else if (currentGameMode == "Play SPS Reverse") {
    modeResult = playSpsReverse(playerName, input);
  } else if (currentGameMode == "Play SPS Korean") {
    modeResult = playMJP(playerName, input);
  }
  return modeResult;
};
