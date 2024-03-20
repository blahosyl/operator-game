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

randomOperands()
