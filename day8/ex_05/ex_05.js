const currentTime = new Date();


const hours = String(currentTime.getHours()).padStart(2, '0'); 
const minutes = String(currentTime.getMinutes()).padStart(2, '0'); 

const timeMessage = `The current time is ${hours}:${minutes}.`;

document.getElementById('time').textContent = timeMessage;