// Global variable to hold the chosen operators – solution by tutor Roo
let currentChosenOperators = [];

// counter for streak without errors
let streak = 0;

// constants (HTML elements)

 // the `div` where the solution/congratulation text is displayed
const solutionDiv = document.getElementById('solution');
// Start Game button
const startGameButton = document.getElementById('start-game-button')
 // the Check Answer/Submit button
const submitButton = document.getElementById('submit-button')
 // the New Game button
const newGameButton = document.getElementById('new-game-button')
 // the streak counter from the bottom of the page
 const streakCounter = document.getElementById('streak-counter');


// event listeners

startGameButton.addEventListener('click',startGame);

// New Game button should start a new game
// add event listener to New Game button to run the `newGame()` function
newGameButton.addEventListener('click',newGame);

// add event listener to Submit button to check the user asnwer
submitButton.addEventListener('click',checkAnswer);

// get all operator select forms
let operators = document.getElementsByClassName('operator-selector');
// add event listener to each operator select form:
// when any of them are changed, the solution text is cleared
for (operator of operators) {
  operator.addEventListener('change',clearSolutionText);
  operator.addEventListener('change',enableSubmitButton);
}

// when the operator selector is changed, add the correcponding number of operand+operator pairs
let operatorSelector = document.getElementById('number-selector');
operatorSelector.addEventListener('change',setOperandOperatorCount);

//functions

function startGame() {
  let welcomeDiv = document.getElementById('welcome-div');
  welcomeDiv.style.display = 'none';
}

// generating and displaying operands (numbers)

/**
*
* Generate an array of random integers, with the array length equal to the lenth of the array generated by `getOperands()`
* @param {number} `bound` the upper bound of the ingeters to be generated (excluding `bound`)
* @return {array} an array of random integers between 0 and `bound`-1
*/
function generateRandomNumbers(bound) {
  randomNumbers = [];
  let length = getOperands().length;
for (let i = 0; i<length; i++) {
    // generate random integer between 0 and `bound-1`
    let randomNumber = Math.floor(Math.random()*bound);
    // add the random integer to the array `randomNumbers`
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}

/**
*
* Eliminate zero from an array and replace it with a random integer
* @param {array} `array` the input array
* @param {number} `bound` the upper bound of the random integer(s) to be generated (excluding `bound`)
* @return {array} `array` the input array modified not to include zeros
*/
function eliminateZero(array,bound) {
  // make sure the number is not 0
  for (i in array) {
    while (array[i] === 0) {
      array[i] = Math.floor(Math.random()*bound);
    }
  }
  return array;
}

/**
* Replace the integers shown on the site with ones from an array of random integers between 0 and `bound` (excl.)
* @param {number} `bound` the upper bound of the range where integers are selected from (not included in the range)
* @return {array} the array of random integers
*/
function showRandomOperands(bound) {
  // generate an array of random integers between 1 and `bound`-1
  // array length is equal to the number of operands shown on the page
  let operandsComputed = eliminateZero(generateRandomNumbers(bound),bound);
  let operands = document.getElementsByClassName('operand');
  // each operand shown on the page is replaced by a random integer from the array
  for (let i = 0; i < operandsComputed.length; i++) { //with the help of tutor Lewis
    operands[i].innerHTML = operandsComputed[i]; //with the help of tutor Lewis
  }
  return operandsComputed;
}

/**
*
* Get the array of operand values from the HTML code.
* This is a separate function because its output is used by multiple other functions, so it needs to be unchanged.
* Getting the output of `showRandomOperands()` would result in a different random array each time it's called
* @return {array} HTML collection https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
*/
function getOperands() {
  // empty array of operand values
  let operandValues = [];
  // get all elements with the class 'operand'
  let operands = document.getElementsByClassName('operand');
  // add the values of operands from the HTML to the array `operandValues`
  for (let operand of operands) {
    operandValues.push(operand.innerHTML);
  }
  return operandValues;
}

// end of generating and displaying operands (numbers)

/**
 * Pick random operators from an array.
 * These are not shown to the user.
 * @return {array} an array random operators with the length equal to the length of the array of operands
 */
function generateRandomOperators() {
  // generate an array of random integers between 0 and 3 (inclusive)
  let randomOperatorNumbers = generateRandomNumbers(4);
  // the operators the program can chose from
  let operators = ["+","-","*","/"];
  // the array that will be filled with the randomly chosen operators at each game
  let chosenOperators = [];
  // get the length of array of operands, and generate 1 less `chosenOperators`
  // there should always be 1 less operators than operands
  let length = getOperands().length-1;
  for (let i = 0; i<length; i++) {
    // add an element from `operators`based on the random number
    chosenOperators.push(operators[randomOperatorNumbers[i]]);
  }
  return chosenOperators;
}

/**
 * Alternately concatenate the operands shown with an array of operators.
 * @param {array} operators the array of operators chosen.  
 * The operators can be the ones chosen by the user or the randomly generated ones.
 * @returns {string} a concatenated string of the operands shown and the operators specified
 */
function concatenateWithOperands(operators) {
  // define empty string for user answer
  let concatenatedString = '';
  // add a dummy operator at the end of the operator array
  // to make its length equal to the array of operators
  operators.push('X');
    // alternately add a number and an operator to the string
    let operands = getOperands();
    let length = operands.length;
    for (let i = 0; i<length; i++) {
      concatenatedString += operands[i];
      concatenatedString += operators[i];
    }
    // cut off the dummy operator from the end of the string
    concatenatedString = concatenatedString.slice(0, -1);
    return concatenatedString;
}

/**
 * Show the expected result in the question area
 * @return {number} The correct solution of the puzzle
*/
function showResult() {
  let result = document.getElementById('result');
  result.innerHTML = eval(concatenateWithOperands(currentChosenOperators));
  return result.innerHTML;
}

/** 
 * Check the answer submitted by the user
*/
function checkAnswer() {
  // concatenate the operands with the operators selected by the user
  let userOperators = getUserOperators();
  concatenateWithOperands(userOperators);
  // calculate the user answer
  checkUserGuess();

  // refresh the perfect streak counter
  refreshStreakCounter();

  // Trigger extra events at certain perfect streak milestones
  showMilestones();
}

/**
 * Get the operators chosen by the user
 * @return {array} the array of operators chosen by the user
 */
function getUserOperators() {
  // get the array of all operators selected by the user
  let userOperators = document.getElementsByClassName('operator-selector');
  // empty array to add operator values to
  let userOperatorValues = [];
  // add each operator value selected by the user to the empty array
  for (let i=0; i<userOperators.length; i++) {
    userOperatorValues.push(userOperators[i].value);
  }
  return userOperatorValues;
}

/**
 * Display the result of the user's incorrect guess
 */
function showUserGuess() {
  // get the concatenated string of operands and user-selected operators
  let userOperators = getUserOperators();
  let guess = concatenateWithOperands(userOperators);

  // show the user's guess and its result
  solutionDiv.innerHTML = `Not quite!<br>
  Your result is:<br>`+
  guess+'='+eval(guess);
}

/**
 * Check the user's guess against the correct solution
 */
function checkUserGuess() {
  // the result based on the operands shown and the operators selected by the user
  let userGuess = eval(concatenateWithOperands(getUserOperators()));

  // the correct result based on the operands shown and the randomly generated operators
  let correctSolution = eval(concatenateWithOperands(currentChosenOperators));
  // the `div` containing the solution/congratulation message

  if (userGuess === correctSolution) {
    // display congratulations message
    solutionDiv.innerHTML = `Congratulations, that is correct!
     <br>
      🎉🎉🎉🎉
    `;
    // disable Submit button
    submitButton.disabled = true;
    // increase perfect streak counter
    streak += 1;
  } else {  
    // show the result of the user's guess
    showUserGuess();
    // change text on Submit button
    submitButton.textContent = 'Check Again';
    // enable Submit button
    submitButton.disabled = true;
    // reset perfect streak
    streak = 0;
  }
}

/**
 * Clear the `solution` div
 */
function clearSolutionText() {
  // set the contents of the `solution` `div` to empty
  solutionDiv.innerHTML = '';
}

/**
 * Enable the Submit button
 * Made into a separate function so that an event listener could trigger it
 */
function enableSubmitButton() {
  submitButton.disabled = false;
}

/**
 * Refresh the perfect streak counter in the HTML
 */
function refreshStreakCounter() {
  // set its content to the value of the global variable `streak`
  streakCounter.textContent=streak;
  return streakCounter;
}

/**
 * Trigger extra events at certain perfect streak milestones
 */
function showMilestones() {
  switch (streak) {
    case 0:
      // change color of streak number
      streakCounter.style.color='black';
      break;
    case 3:
      // fire an alert (with timeout, so other code executes before it)
      setTimeout(function () { alert('3 in a row!'); }, 10);
      // change color of streak number
      streakCounter.style.color='red';
      break;
    case 5:
      // fire an alert (with timeout, so other code executes before it)
      setTimeout(function () { alert('5 in a row!'); }, 10);
      // change color of streak number
      streakCounter.style.color='orange';
      break;
    case 10:
      // fire an alert (with timeout, so other code executes before it)
      setTimeout(function () { alert('10 in a row!'); }, 10);
      // change color of streak number
      streakCounter.style.color='blue';
      break;
  }
}

/**
 * Get the number of operands from the dropdown selector
 * @returns {number}
 */
function getOperandNumber() {
  let operandNumber = document.getElementById('number-selector').value;
  return operandNumber;
}

/**
 * Adjust the instruction text in the game area depending on the number of operands:
 * singular "operator" for 2 operands, plural "operators" for 3 or more operands
 */
function adjustInstructions() {
  // get the `game-area` from the HTML
  let gameArea = document.getElementById('game-area');
  // the first paragraph within it
  let instructions = gameArea.children[0];
  // the number of operands chose by the user
  let num = getOperandNumber();
  if (num == 2) { // this needs to be `==`, not `====`, type conversion needed
    instructions.innerHTML = 'Choose the correct operator to get the result shown'
  } else {
    instructions.innerHTML = 'Choose the correct operators to get the result shown'
  }
  console.log(instructions);
}


/**
 * Adjust the number of operators and operands based on the value of the operand dropdown selector
 */
function setOperandOperatorCount() {
  let questionDiv = document.getElementById('question-area');
  // the first operand shown
  let operand1 = questionDiv.children[0];
  // the first operator dropdown shown
  let operator1 = questionDiv.children[1];
  // the value of the operand selector
  let num = getOperandNumber();

  while (getOperands().length +1 <= num){
    // 2 operands appear by default, so:
    // iterate 2 times less than the number specified by the dropdown
    for (i=2; i<num; i++) { 
      // clone the first operand node
      let newOperand = operand1.cloneNode(true);
      // clone the first operator node
      let newOperator = operator1.cloneNode(true);
      // add operator to the beginning of the div
      // has to be added before adding the operand
      questionDiv.insertBefore(newOperator, questionDiv.children[0]);
      // add operand to the beginning of the div
      // has to be added after adding the operator
      questionDiv.insertBefore(newOperand, questionDiv.children[0]);
    }
}

  // if the number of operands is larger than the value of the operand selector 
  while (getOperands().length > num) {
      // remove the first operator dropdown
      questionDiv.children[1].remove();
      // remove the first operand
      questionDiv.children[0].remove();
  }

  // adjust the instruction text based on the number of operands
  adjustInstructions();

  // start a new game after changing the number of operands
  newGame();
}

/**
* Run a new game
*/
function newGame() {

  // clear the `solution` text
  clearSolutionText();
  // enable Submit button again
  submitButton.disabled = false;

  // Submit button should have initial text
  submitButton.textContent='Check Answer';

  // set operator menus back to '+'
  for (operator of operators) {
    operator.value = ('+');
  }

  // show operands in the question area
  showRandomOperands(11);
 
  // reset operator numbers
  currentChosenOperators = []// with the help of tutor Roo (refactored)
  console.log(currentChosenOperators = generateRandomOperators()); // with the help of tutor Roo

  // show the expected result of the calculation in the question area
  showResult();

  // show the correct result in the log for development purposes
  console.log('the correct solution:',concatenateWithOperands(currentChosenOperators)+'='+eval(concatenateWithOperands(currentChosenOperators)));

  // the result should not have more than 2 decimal places
  while (Number.isInteger(showResult()*100) === false) {
    newGame();
  }

}

// run a new game when refreshing the page
newGame()
