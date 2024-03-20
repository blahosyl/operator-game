//replace all operands with random integers between 0 and 10 (incl)
function randomOperands() {
  // get the array of operands
  let operands = document.getElementsByClassName('operand');

  // replace each operand with a different random integer
  for (let operand of operands) {
    // generate random integer between 0 and 10
    let randomNumber = Math.floor(Math.random()*11);
    operand.innerHTML = randomNumber;
  }
}

function newGame() {
  randomOperands()
}

// run this function when refreshing the page
newGame()

// New Game button should start a new game
// get the New Game button
let newGameButton = document.getElementById('new-game-button')
console.log(newGameButton);
// add event listener to New Game button to run the new game function
newGameButton.addEventListener('click',newGame);
