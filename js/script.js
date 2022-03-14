$(document).ready(function () {
    var $content = $(".content").hide();
    $(".toggle").on("click", function (e) {
        $(this).toggleClass("expanded");
        $(this).next().slideToggle();

    });
});
//hover element
$(document).ready( function() {

    $('.container-fluid').hover( function() {
        $(this).find('.overlay').fadeIn();
    }, function() {
        $(this).find('.overlay').fadeOut();
    });
    
});