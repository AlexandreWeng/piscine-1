window.onload = function()  {
    var colorButton = document.querySelector(".cart-btn");
    colorButton.textContent = "CHANGE COLOR";
    colorButton.addEventListener("click", function() {
        var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });
};

