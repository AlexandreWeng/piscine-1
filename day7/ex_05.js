function findClosestResult(functionsObj, inputNumber, outputNumber) {
    let closestKey = null; 
    let minDifference = Infinity; 
    for (const key in functionsObj) {
        if (functionsObj.hasOwnProperty(key)) {
            const result = functionsObj[key](inputNumber);
            const difference = Math.abs(result - outputNumber); 

            if (difference < minDifference) {
                minDifference = difference; 
                closestKey = key; 
            }
        }
    }

    return closestKey; 
}

const fObj = {};
fObj.multipleByEight = (x) => x * 8;
fObj.square = (x) => x * x;
fObj.addSixty = (x) => x + 60;

console.log(findClosestResult(fObj, 5, 26)); 
console.log(findClosestResult(fObj, 10, 5)); 
console.log(findClosestResult(fObj, 5, 45));
