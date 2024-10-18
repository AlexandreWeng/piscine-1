window.onload = function(){
    window.addEventListener("resize", function() {
        alert("Size matters");
    })

    var phoneImage = document.querySelector("img")
        
    if (phoneImage) {
        phoneImage.addEventListener("mouseover", function() {
            alert("Pretty, isn't it?")
            })
        }
    
}
