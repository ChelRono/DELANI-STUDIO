$
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").toggle();
    });
  });
  
//hover element
/* $(document).ready( function() {

    $('.image').hover( function() {
        $(this).find('.overlay').fadeIn();
    }, function() {
        $(this).find('.overlay').fadeOut();
    });
    
}); */
$(document).ready(function() {
    $('.text').hide();
     $('img').animate({
        opacity:1
 
 });
 
 $('img').hover(function() {
     $(this).stop().animate({opacity:.4},200);
     $('.text').fadeIn();
 
 }, function() {
     $(this).stop().animate({opacity:1},500)
     $('.text').fadeOut();
 });
 });