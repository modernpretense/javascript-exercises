const repeatString = function(input, amount) {
    
    let output = input;

    for (let i = 0; i < amount-1; i++) {
        output = output+input;
    }

    if (amount === 0) {
        return '';
    } else if (amount < 0) {
        return "ERROR";
    } else {
        return output;
    }
    

};

// Do not edit below this line
module.exports = repeatString;
