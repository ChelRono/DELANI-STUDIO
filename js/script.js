$(".toggler").click(function() {
    
    // Reset all
    $(".toggler img.alt").hide();
    $(".toggler img.orig").show();
    
    // Now toggle the ones in this .toggler
    $("img", this).toggle();
});