const reverseString = function(input) {
    
    const inputArray = input.split('');
    inputArray.reverse();
    let inputReverse = inputArray.join('');
    return inputReverse;
    
};

// Do not edit below this line
module.exports = reverseString;
