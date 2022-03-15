$
$(document).ready(function(){
    $(".design1").click(function(){
      $("#hide").toggle();
    });
  });
  $
  $(document).ready(function(){
      $(".development1").click(function(){
        $("#hide1").toggle();
      });
    });
    $
    $(document).ready(function(){
        $(".product1").click(function(){
          $("#hide2").toggle();
        });
      });


//adding hover effect
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