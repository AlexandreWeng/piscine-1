function addCar(agentString, car)
{
    let object = JSON.parse(agentString)
    object.car = car
    return object
}

agentString = '{"age": 57, "numbers": "007", "firstName": "James", "lastName": "Bond"}';
let car = "Aston Martin"
let updatedAgent = addCar(agentString, car)

console.log(updatedAgent)