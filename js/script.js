$(document).ready(function () {
    var $content = $(".content").hide();
    $(".toggle").on("click", function {
        $(this).toggleClass("expanded");
        $(this).next().slideToggle();

    });
});
/* $(document).ready(function(){
    $("toggle").click(function(){
      $("p").toggle();
    });
  }); */
 /*  $(document).ready(function(){
    $(".development").click(function(){
      $("p").toggle();
    });
  });
  $(document).ready(function(){
    $(".product").click(function(){
      $("p").toggle();
    });
  }); */
//hover element
$(document).ready( function() {

    $('.image').hover( function() {
        $(this).find('.overlay').fadeIn();
    }, function() {
        $(this).find('.overlay').fadeOut();
    });
    
});