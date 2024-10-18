function splitOperation(operation) {
   
    let firstNumber = parseInt(operation[0])
    let operator = operation[1]
    let secondNumber = parseInt(operation[2])

    return [firstNumber, operator, secondNumber];
    }
    
console.log(splitOperation("3+5"))
