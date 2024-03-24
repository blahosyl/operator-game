// Global variable to hold the chosen operators – solution by tutor Roo
let currentChosenOperators = [];

/**
* Run a new game by generating new operands and operators, calculating the correct score and showing the puzzle to the user
*/
function newGame() {


  console.log('showRandomOperands',showRandomOperands());

  // reset operator numbers
  currentChosenOperators = []
  console.log(currentChosenOperators = generateRandomOperators()); // Roo

  showResult()

  checkAnswer()
}

// run this function when refreshing the page
newGame()

// New Game button should start a new game
// get the New Game button
let newGameButton = document.getElementById('new-game-button')
// add event listener to New Game button to run the new game function
newGameButton.addEventListener('click',newGame);

// get the Submit Answer button
let submitButton = document.getElementById('submit-button')
// add event listener to Submit button to check the user asnwer
submitButton.addEventListener('click',checkAnswer);



/**
*
* Get the array of operand values from the HTML code
* @return {array} HTML collection https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
*/
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

/**
*
* Generate an array of random integers, with the array length equal to the lenth of the array generated by `getOperands()`
* @param {number} `count` the upper bound of the ingeters to be generated (excluding `count`)
* @return {array} an array of random integers between 0 and `count`-1
*/
function generateRandomNumbers(count) {
  randomNumbers = [];
for (let i = 0; i<getOperands().length; i++) {
    // generate random integer between 0 and `count-1`
    let randomNumber = Math.floor(Math.random()*count);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

/**
*
* Eliminate zero from an array and replace it with a random integer
* @param {array} `array` the input array
* @param {number} `count` the upper bound of the random integer(s) to be generated (excluding `count`)
* @return {array} `array` the input array modified not to include zeros
*/
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
* Assign the the array of random numbers to the integers shown on the site
* @return {array} the array of random integers
*/
function showRandomOperands() {
  let operandsComputed = eliminateZero(generateRandomNumbers(11),11);
  let operands = document.getElementsByClassName('operand');
  for (let i = 0; i < operandsComputed.length; i++) {
    operands[i].innerHTML = operandsComputed[i];
  }
  return operandsComputed;
}

/**
 * Pick random operators from an array
 * @return {array} an array random operators with the length equal to the length of the array of operands
 */
function generateRandomOperators() {
  // generate an array of random integers between 0 and 3 (inclusive)
  let randomOperatorNumbers = generateRandomNumbers(4);
  // the operators the program can chose from
  let operators = ["+","-","*","/"];
  // the array that will be filled with the randomly chosen operators at each game
  let chosenOperators = [];
  // get the length of array of operands, and generate the same number of chosenOperators
  // this is one more than we need, but it ensures the arrays of operands and operators are of the same length (for concatenating them for calculation)
  // the extra operator will be removed after calculation
  for (let i = 0; i<getOperands().length; i++) {
    // add an element from `operators`based on the random number
    chosenOperators.push(operators[randomOperatorNumbers[i]]);
  }
  return chosenOperators;
}

/**
* Calculate the correct solution based on the random numbers and random operators
 */
function calculateSolution() {
  // define empty string for solution
  let solution = '';
  // alternately add a number and an operator
  for (let i = 0; i<getOperands().length; i++) {
    solution += getOperands()[i];
    solution += currentChosenOperators[i]; // Roo
  }

  // cut off the last operator from the end of the string
  solution = solution.slice(0, -1);

  // calculate the correct solution
  let solutionValue = eval(solution);

  console.log('the correct solution:',solution+'='+solutionValue);

  // shows the correct solution for now. to be changed to show calculation of incorrect solution only
  let solutionDiv = document.getElementById('solution');
  solutionDiv.innerHTML = solution+'='+solutionValue;
  return solutionValue;
}

function showResult() {
  let result = document.getElementById('result');
  result.innerHTML = calculateSolution();
}

/** 
 * Check the answer submitted by the user
*/
function checkAnswer() {
  concatenateUserAnswer();
  // calculate the user answer
  console.log('userAnswer: ',concatenateUserAnswer()+'='+eval(concatenateUserAnswer()));
}

/**
 * Get the operators chosen by the user
 * @return {array} the array of operators chosen by the user
 */
function getUserOperators() {
  let userOperators = document.getElementsByClassName('operator-selector');
  let userOperatorValues = [];
  for (let i=0; i<userOperators.length; i++) {
    userOperatorValues.push(userOperators[i].value);
  }
  return userOperatorValues;
}


function concatenateUserAnswer() {
  // define empty string for user answer
  let userAnswer = '';
  // get the operators chosen by the user
  let userOperatorValues = getUserOperators();
  // add a dummy operator at the end of the `userOperatorValues` array
  // to make its length equal to the array of operators
  userOperatorValues.push('X');
    // alternately add a number and an operator
    for (let i = 0; i<getOperands().length; i++) {
      userAnswer += getOperands()[i];
      userAnswer += userOperatorValues[i];
    }
    // cut off the last operator from the end of the string
    userAnswer = userAnswer.slice(0, -1);
    return userAnswer;
}