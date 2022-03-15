$('#hide').hide();

        $('#show,#hide').on('click',function(){

        	$('#show,#hide').toggle()
        });
        $('#hide1').hide();

        $('#show1,#hide1').on('click',function(){

        	$('#show1,#hide1').toggle()
        });
        $('#hide2').hide();

        $('#show2,#hide2').on('click',function(){

        	$('#show2,#hide2').toggle()
        });
/* $
$(document).ready(function(){
    $(".design1").click(function(){
      $("#hide").toggle();
      // $("#show").toggle();
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
      }); */


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