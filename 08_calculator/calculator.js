const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(input) {
	return input.reduce((total, current) => total + current, 0);
};

const multiply = function(input) {
  return input.length
    ? input.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
