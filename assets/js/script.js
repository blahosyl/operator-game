// get the array of operands
let operands = document.getElementsByClassName('operand');

// replace each operand with a different random number
for (let operand of operands) {
  // generate random number between 0 and 10
  let randomNumber = Math.floor(Math.random()*11);
  operand.innerHTML = randomNumber;
}
