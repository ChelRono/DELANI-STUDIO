$(".toggler").click(function() {
    
    // Reset all
    $(".toggler img.design").hide();
    $(".toggler p.par").show();
    
    // Now toggle the ones in this .toggler
    $("img", this).toggle();
});