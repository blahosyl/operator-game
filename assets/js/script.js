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
operatorSelector.addEventListener('change',setOperandOperatorCount);


/**
* Run a new game by generating new operands and operators, calculating the correct score and showing the puzzle to the user
*/
function newGame() {

  // clear the `solution` text
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
  // add the values of operands from the HTML to the array `operandValues`
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
    // add the random integer to the array `randomNumbers`
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
* Replace the integers shown on the site with ones from an array of random numbers
* @return {array} the array of random integers
*/
function showRandomOperands() {
  // generate an array, random integers between 1 and 10
  // array length is equal to the number of operands shown on the page
  let operandsComputed = eliminateZero(generateRandomNumbers(11),11);
  let operands = document.getElementsByClassName('operand');
  // each operand shown on the page is replaced by a random integer from the array
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
  // get the length of array of operands, and generate 1 less `chosenOperators`
  // there should always be 1 less operators than operands
  for (let i = 0; i<getOperands().length-1; i++) {
    // add an element from `operators`based on the random number
    chosenOperators.push(operators[randomOperatorNumbers[i]]);
  }
  return chosenOperators;
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
 * Alternately concatenate the operands shown with an array of operators.
 * @param {array} operators the array of operators chosen.  
 * The operators can be the ones chosen by the user or the randomly generated ones.
 * @returns {string} a concatenated string of the operands shown and the operators specified
 */
function concatenateWithOperands(operators) {
  // define empty string for user answer
  let concatenatedString = '';
  // get the operators chosen by the user
  let userOperatorValues = operators;
  // add a dummy operator at the end of the operator array
  // to make its length equal to the array of operators
  userOperatorValues.push('X');
    // alternately add a number and an operator to the string
    for (let i = 0; i<getOperands().length; i++) {
      concatenatedString += getOperands()[i];
      concatenatedString += userOperatorValues[i];
    }
    // cut off the dummy operator from the end of the string
    concatenatedString = concatenatedString.slice(0, -1);
    return concatenatedString;
}

/**
 * Displays the solution if the user guess is wrong
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
    // enable Submit button
    submitButton.disabled = true;
    // reset perfect streak
    streak = 0;
    // set the counter color back to black
    let streakCounter = document.getElementById('streak-counter');
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
 * Made into a separate function so that an event listener could trigger it
 */
function enableSubmitButton() {
  submitButton.disabled = false;
}

/**
 * Refresh the perfect streak counter in the HTML
 */
function refreshStreakCounter() {
  // get the streak counter from the page
  let streakCounter = document.getElementById('streak-counter');
  // set its content to the value of the global variable `streak`
  streakCounter.textContent=streak;
  return streakCounter;
}

/**
 * Trigger extra events at certain perfect streak milestones
 */
function showMilestones() {
  let streakCounter = document.getElementById('streak-counter');

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

  // start a new game after changing the number of operands
  newGame();
}

/**
 * Get the number of operands from the dropdown selector
 * @returns {number}
 */
function getOperandNumber() {
  let operandNumber = document.getElementById('number-selector').value;
  return operandNumber;
}
