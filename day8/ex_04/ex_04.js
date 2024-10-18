function houdini() {
    $('p').fadeOut();  
}

$(document).ready(function() {
    $('#disappear-btn').click(function() {
        houdini();  
    });
});