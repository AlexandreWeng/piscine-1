let currentRotation = 0;

function rotateCircle(step) {
    const circle = document.getElementById('circle');
    if (step === 0) {
        currentRotation = 0;
    } else {
        currentRotation += step;
    }
    
    circle.style.transform = "rotate(" + currentRotation + "deg)";
}

document.getElementById('rotate-add-90').addEventListener('click', function() {
    rotateCircle(90)});

document.getElementById('rotate-add-45').addEventListener('click', function() {
    rotateCircle(45)});

document.getElementById('rotate-reset').addEventListener('click', function() {
    rotateCircle(0)});

document.getElementById('rotate-sub-45').addEventListener('click', function() {
    rotateCircle(-45)});

document.getElementById('rotate-sub-90').addEventListener('click', function() {
    rotateCircle(-90)});