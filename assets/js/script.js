// Global variable to hold the chosen operators – solution by tutor Roo
let currentChosenOperators = [];

// counter for streak without errors
let streak = 0;

// event listeners

// New Game button should start a new game
// get the New Game button
let newGameButton = document.getElementById('new-game-button')
// add event listener to New Game button to run the new game function
newGameButton.addEventListener('click',newGame);

// get the Submit Answer button
let submitButton = document.getElementById('submit-button')
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
operatorSelector.addEventListener('change',addOperand);


/**
* Run a new game by generating new operands and operators, calculating the correct score and showing the puzzle to the user
*/
function newGame() {

  clearSolutionText();
  // enable Submit button again
  document.getElementById('submit-button').disabled = false;

  // Submit button should have initial text
  document.getElementById('submit-button').textContent='Check Answer';

  // set operator menus back to '+'
  for (operator of operators) {
    operator.value = ('+');
  }

  // show operands in the question area
  showRandomOperands();
 
  // reset operator numbers
  currentChosenOperators = []// with the help of tutor Roo (refactored)
  console.log(currentChosenOperators = generateRandomOperators()); // with the help of tutor Roo

  // show the expected result of the calculation in the question area
  // also on the console for development
  showResult();

  // show the correct result in the log for development purposes
  console.log('the correct solution:',concatenateWithOperands(currentChosenOperators)+'='+eval(concatenateWithOperands(currentChosenOperators)));

  // the result should not have more than 2 decimal places
  while (Number.isInteger(showResult()*100) === false) {
    newGame();
  }

}

// run this function when refreshing the page
newGame()

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
  for (let i = 0; i < operandsComputed.length; i++) { //with the help of tutor Lewis
    operands[i].innerHTML = operandsComputed[i]; //with the help of tutor Lewis
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
  for (let i = 0; i<getOperands().length-1; i++) {
    // add an element from `operators`based on the random number
    chosenOperators.push(operators[randomOperatorNumbers[i]]);
  }
  return chosenOperators;
}

/**
 * Show the expected result in the question area
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
  concatenateWithOperands(getUserOperators());
  // calculate the user answer
  checkSolution();

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
  let userOperators = document.getElementsByClassName('operator-selector');
  let userOperatorValues = [];
  for (let i=0; i<userOperators.length; i++) {
    userOperatorValues.push(userOperators[i].value);
  }
  return userOperatorValues;
}

/**
 * Alternately concatenates the operands shown with an array of operators.
 * @param {array} operators the array of operators chosen.  
 * The operators can be the ones chosen by the user or the randomly generated ones.
 * @returns {string} a concatenated string of the operands shown and the operators specified
 */
function concatenateWithOperands(operators) {
  // define empty string for user answer
  let concatenatedString = '';
  // get the operators chosen by the user
  let userOperatorValues = operators;
  // add a dummy operator at the end of the `userOperatorValues` array
  // to make its length equal to the array of operators
  userOperatorValues.push('X');
    // alternately add a number and an operator
    for (let i = 0; i<getOperands().length; i++) {
      concatenatedString += getOperands()[i];
      concatenatedString += userOperatorValues[i];
    }
    // cut off the last operator from the end of the string
    concatenatedString = concatenatedString.slice(0, -1);
    return concatenatedString;
}

/**
 * Displays the solution if the user gets it wrong.
 */
function showUserSolution() {
  // get the concatenated string of operands and user operators
  let solution = concatenateWithOperands(getUserOperators());

  // shows the user's solution and its result
  let solutionDiv = document.getElementById('solution');
  solutionDiv.innerHTML = `Not quite!<br>
  Your result is:<br>`+
  solution+'='+eval(solution);
}

/**
 * Check the user's solution against the correct solution
 */
function checkSolution() {
  // the result based on the operands shown and the operators selected by the user
  let userSolution = eval(concatenateWithOperands(getUserOperators()));

  // the correct result based on the operands shown and the randomly generated operators
  let correctSolution = eval(concatenateWithOperands(currentChosenOperators));
  // the `div` containing the solution/congratulation message
  let solutionDiv = document.getElementById('solution');

  if (userSolution === correctSolution) {
    // display congratulations message
    solutionDiv.innerHTML = `Congratulations, that is correct!
     <br>
      🎉🎉🎉🎉
    `;
    // disable Submit button
    document.getElementById('submit-button').disabled = true;
    // increase perfect streak counter
    streak += 1;
  } else {  
    // show the solution of the user's guess
    showUserSolution();
    // get the Submit button from the HTML
    let submitButton = document.getElementById('submit-button');
    // change text on Submit button
    submitButton.textContent = 'Check Again';
    // disable Submit button
    submitButton.disabled = true;
    // reset perfect streak
    streak = 0;
    // set the counter color back to black
    let streakCounter = document.getElementById('streak');
    streakCounter.style.color='black';

  }
}

/**
 * Clear the `solution` div
 */
function clearSolutionText() {
  // get the `solution` div from HTML
  let solutionDiv = document.getElementById('solution');
  // set its contents to empty
  solutionDiv.innerHTML = '';
}

/**
 * Enable the Submit button
 */
function enableSubmitButton() {
  submitButton.disabled = false;
}

/**
 * Refresh the perfect streak counter in the HTML
 */
function refreshStreakCounter() {
  let streakCounter = document.getElementById('streak');
  streakCounter.textContent=streak;
  return streakCounter;
}

/**
 * Trigger extra events at certain perfect streak milestones
 */
function showMilestones() {
  let streakCounter = document.getElementById('streak');

  switch (streak) {
    case 4:
      // fire an alert (with timeout, so other code executes before it)
      setTimeout(function () { alert('4 in a row!'); }, 10);
      // change color of streak number
      streakCounter.style.color='red';
      break;
    case 10:
      // fire an alert (with timeout, so other code executes before it)
      setTimeout(function () { alert('10 in a row!'); }, 10);
      // change color of streak number
      streakCounter.style.color='blue';
      break;
  }
}

function addOperand() {
  let questionDiv = document.getElementById('question-area');
  let operand1 = questionDiv.children[0];
  let operator1 = questionDiv.children[1];
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

  // if the number of operands is larger than the value of 
  // the operand selector, remove the first operator dropdown
  // and the first operand
  while (getOperands().length > num) {
      questionDiv.children[1].remove();
      questionDiv.children[0].remove();
  }

  // start a new game after changing the number of operands
  newGame();
}

/**
 * Get the operater number from the dropdown selector
 * @returns {number}
 */
function getOperandNumber() {
  let operandNumber = document.getElementById('number-selector').value;
  return operandNumber;
}
