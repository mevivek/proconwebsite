$(document).ready(function(){
    
var min_width= 800;  
if(screen.width > min_width)
{
    $(".carousel-inner").css("height", "70%");
}
else if(screen.width > screen.height)
{
     $(".carousel-inner").css("height", "90%");
}
    

    
window.addEventListener("orientationchange", function() {
location.reload(true);    
}, false);
    

    
$("#menu").click(function() {
    $("#menu_slide").slideToggle();
});
    
$("#events").click(function() {
    $("#events_slide").slideToggle();
});
    
});