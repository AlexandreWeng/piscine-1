function Ooch(){
    document.getElementById("speech-bubble").innerHTML = "Ooch, that hurts!";
setTimeout(() => {
    document.getElementById("speech-bubble").innerHTML = "Hello !";
  }, 2000);
}
function coordinate(event) {
    const x = event.clientX; 
    const y = event.clientY; 
    document.getElementById("screen-text").innerHTML = "X:" + x + ", Y:"+ y;
}
function bip(){
    document.getElementById('screen-text').innerHTML="Bip bip bip";
}

function takecare(){
    document.getElementById('screen-text').innerHTML = "Don’t worry, I’ll take care of it!";
    setTimeout(() => {
        document.getElementById("screen-text").innerHTML = "Bip bip bip";
      }, 2000);
}

let clickEyeCount = 0;

function eyeClick()
{
    clickEyeCount += 1;
    if(clickEyeCount >= 10)
    {
        const left = document.querySelector(".eye-left-iris");
        const right = document.querySelector(".eye-right-iris");

        left.style.fill = randomColor();
        right.style.fill = randomColor();

        clickEyeCount = 0;
    }
}

function randomColor()
{
    const letters = "123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++)
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


document.getElementById('robot').addEventListener('click', Ooch);
document.getElementById('robot').addEventListener('mouseover', coordinate);
document.getElementById('robot').addEventListener('mouseout', bip);
document.getElementById('robot-input').addEventListener('input', takecare);


document.querySelectorAll(".eye-left-iris, .eye-right-iris").forEach(eye =>
    {
        eye.addEventListener("click", eyeClick);
    });