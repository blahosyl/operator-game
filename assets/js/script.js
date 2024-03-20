function newGame() {
  randomOperands();
  randomOperators();
  calculateSolution()
}

// run this function when refreshing the page
newGame()

// New Game button should start a new game
// get the New Game button
let newGameButton = document.getElementById('new-game-button')
// add event listener to New Game button to run the new game function
newGameButton.addEventListener('click',newGame);

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
    operandValues.push(randomNumber);
  }
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
  for (let i = 0; i<randomOperands().length; i++) {
    // generate random integer between 0 and 3 (incl)
    randomNumber = Math.floor(Math.random()*4);
    // add an element from `operators`based on the random number
    chosenOperators.push(operators[randomNumber]);
  }
  return chosenOperators;
}

function calculateSolution() {
  let solution = '';
  for (let i = 0; i<randomOperands().length; i++) {
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
