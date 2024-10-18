function displayAgentInfo(obj) {
    let text = 'My name is '+ obj.lastName+", "+ obj.firstName+" "+obj.lastName+" ! I'm the agent " +obj.numbers+ " and I'm "+obj.age+ " years old."

    let paragraph = document.querySelector('p');
    paragraph.textContent = text;

}

let person = {
    age: 57,
    numbers: '007',
    firstName: 'James',
    lastName: 'Bond'}
window.onload = function()

{
displayAgentInfo(person);
}