const sumAll = function(numOne, numTwo) {

    let smallestNum;
    let largetstNum;

    if (numOne < 0 || numTwo < 0) {
        return 'ERROR';
    } else if (typeof numOne != 'number' || typeof numTwo != 'number') {
        return 'ERROR';
    } else if (numOne < numTwo) {
        smallestNum = numOne;
        largetstNum = numTwo;
    } else if (numTwo < numOne) {
        smallestNum = numTwo;
        largetstNum = numOne;
    } else {
        return 'ERROR';
    }

    let sum = smallestNum;
    let nextNum = smallestNum+1;

    for (let i = smallestNum; i < largetstNum; i++) {
        sum = sum + nextNum;
        nextNum++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;


 1 , 4