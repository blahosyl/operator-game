  function newGame() {
    randomOperands()
  }

  // run this function when refreshing the page
  newGame()

  //replace all operands with random integers between 1 and 10 (incl)
  function randomOperands() {
    // get the array of operands
    let operands = document.getElementsByClassName('operand');

    // replace each operand with a different random integer
    for (let operand of operands) {
      // generate random integer between 1 and 10
        let randomNumber = Math.floor(Math.random()*11);
        // make sure number is not 0
        while (randomNumber === 0) {
          randomNumber = Math.floor(Math.random()*11);
      }
      operand.innerHTML = randomNumber;
  }
  }

  // New Game button should start a new game
  // get the New Game button
  let newGameButton = document.getElementById('new-game-button')
  // add event listener to New Game button to run the new game function
  newGameButton.addEventListener('click',newGame);
