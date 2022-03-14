$(".toggler").click(function() {
    
    // Reset all
    $(".toggler img.product").hide();
    $(".toggler p.par").show();
    
    // Now toggle the ones in this .toggler
    $("img", this).toggle();
});
$(".toggler").click(function() {
    
    // Reset all
    $(".toggler img.development").hide();
    $(".toggler p.par").show();
    
    // Now toggle the ones in this .toggler
    $("img", this).toggle();
});
$(".toggler").click(function() {
    
    // Reset all
    $(".toggler img.design").hide();
    $(".toggler p.par").show();
    
    // Now toggle the ones in this .toggler
    $("img", this).toggle();
});