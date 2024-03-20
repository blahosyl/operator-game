function newGame() {
  console.log('Get operands',getOperands());
  console.log('showRandomOperands',showRandomOperands());
  // calculateSolution();
}

// run this function when refreshing the page
newGame()

// New Game button should start a new game
// get the New Game button
let newGameButton = document.getElementById('new-game-button')
// add event listener to New Game button to run the new game function
newGameButton.addEventListener('click',newGame);

// get the array of operands
function getOperands() {
  // empty array of operand values
  let operandValues = [];
  // get all elements with the class 'operand'
  let operands = document.getElementsByClassName('operand');

  for (let operand of operands) {
    operandValues.push(operand.innerHTML);
  }
  return operandValues;
}

// 8 generate an array of random numbers, array size is the `count` parameter
function generateRandomNumbers(count) {
  randomNumbers = [];
for (let i = 0; i<getOperands().length; i++) {
    // generate random integer between 0 and 10
    let randomNumber = Math.floor(Math.random()*count);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

// eliminate zero from an array (par1) and replace it with a random number (par2)
function eliminateZero(array,count) {
  // make sure the number is not 0
  for (i in array) {
    while (array[i] === 0) {
      array[i] = Math.floor(Math.random()*count);
    }
  }
  return array;
}

/**
* assign the the array of random numbers to the integers shown on the site
*/
function showRandomOperands() {
  let operandsComputed = eliminateZero(generateRandomNumbers(11),11);
  let operands = document.getElementsByClassName('operand');
  for (let i = 0; i < operandsComputed.length; i++) {
    operands[i].innerHTML = operandsComputed[i];
  }

  // for (let operand in operands) {
  //   operand.innerHTML = operandsComputed[operand];
  // }

  console.log('type of operands:',typeof operands);
  console.log('operands: element', operands);
  console.log('operands keys:', Object.keys(operands));
  console.log('operands length:', operands.length);
  return operandsComputed;
}

// THIS FUNCTION SHOULD BE BROKEN UP INTO SMALLER PIECES
//replace all operands with random integers between 1 and 10 (incl)
function randomOperands() {
  // get the array of operands
  let operands = document.getElementsByClassName('operand');
  // empty array of values for calculation
  let operandValues = [];

  // replace each operand with a different random integer
  for (let operand of operands) {
    // generate random integer between 1 and 10
    let randomNumber = Math.floor(Math.random()*11);
    // make sure number is not 0
    while (randomNumber === 0) {
      randomNumber = Math.floor(Math.random()*11);
    }
    // show the random integer in the HTML
    operand.innerHTML = randomNumber;
    console.log(operand.innerHTML);
    // add the random integer to the array of values for calculation
    operandValues.push(operand.innerHTML*1);
  }
  console.log(operandValues);
  return operandValues;
}

// pick random operators: +, -, * or /
function randomOperators() {
  // the operators the program can chose from
  let operators = ["+","-","*","/"];
  // the array that will be filled with the randomly chosen operators at each game
  let chosenOperators = [];

  // get the length of array of operands, and generate the same number of chosenOperators
  // this is one more than we need, but it ensures the arrays of operands and operators are of the same length (for concatenating them for calculation)
  // the extra operator will be removed after calculation
  for (let i = 0; i<3; i++) {
    // generate random integer between 0 and 3 (incl)
    randomNumber = Math.floor(Math.random()*4);
    // add an element from `operators`based on the random number
    chosenOperators.push(operators[randomNumber]);
  }
  console.log(chosenOperators);
  return chosenOperators;
}

// TRY TO BREAK UP FUNCTIONS INTO SMALLER PIECES:
// 1. RANDOM NUMBER GENERATOR FOR INTEGERS, ADDS VALUES TO ARRAY `operandValues`
// 2. function to change `innerHTML` using `operandValues`


function calculateSolution() {
  let solution = '';
  for (let i = 0; i<3; i++) {
    solution+=randomOperands()[i];
    solution+=randomOperators()[i];
  }

  // cut off the last operand from the end of the string
  solution = solution.slice(0, -1);

  solutionValue = eval(solution);

  console.log(solution+'='+solutionValue);

  // shows the correct solution for now. to be changed to show calculation of incorrect solution only
  let solutionDiv = document.getElementById('solution');
  solutionDiv.innerHTML = solution+'='+solutionValue;

}
