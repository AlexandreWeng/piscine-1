function reduceOpacity() {
    const square = document.getElementById('square');
    square.style.opacity = parseFloat(square.style.opacity) * 0.5;
}


function resetOpacity() {
    const square = document.getElementById('square');
    square.style.opacity = 1;
}


document.getElementById('square').addEventListener('mouseover', reduceOpacity);
document.getElementById('square').addEventListener('mouseout', resetOpacity);