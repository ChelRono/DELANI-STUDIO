$
$(document).ready(function(){
    $("#hide").click(function(){
      $("p").toggle();
    });
  });

$(document).ready(function() {
    $('.text').hide();
     $('.photo').animate({
        opacity:1
 
 });
 
 $('.photo').hover(function() {
     $(this).stop().animate({opacity:.4},200);
     $('.text').fadeIn();
 
 }, function() {
     $(this).stop().animate({opacity:1},500)
     $('.text').fadeOut();
 });
 });