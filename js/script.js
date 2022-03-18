$('#hide').hide();

$('#show,#hide').on('click', function () {

  $('#show,#hide').toggle()
});
$('#hide1').hide();

$('#show1,#hide1').on('click', function () {

  $('#show1,#hide1').toggle()
});
$('#hide2').hide();

$('#show2,#hide2').on('click', function () {

  $('#show2,#hide2').toggle()
});


//adding hover effect
$(document).ready(function () {
  $('.text').hide();
  $('.photo').animate({
    opacity: 1

  });

  $('.photo').hover(function () {
    $(this).stop().animate({ opacity: .4 }, 200);
    $('.text').fadeIn();

  }, function () {
    $(this).stop().animate({ opacity: 1 }, 500)
    $('.text').fadeOut();
  });
});
$(document).ready(function () {
  $('.text1').hide();
  $('.photo1').animate({
    opacity: 1

  });

  $('.photo1').hover(function () {
    $(this).stop().animate({ opacity: .4 }, 200);
    $('.text1').fadeIn();

  }, function () {
    $(this).stop().animate({ opacity: 1 }, 500)
    $('.text1').fadeOut();
  });
});
$(document).ready(function () {
  $('.text2').hide();
  $('.photo2').animate({
    opacity: 1

  });

  $('.photo2').hover(function () {
    $(this).stop().animate({ opacity: .4 }, 200);
    $('.text2').fadeIn();

  }, function () {
    $(this).stop().animate({ opacity: 1 }, 500)
    $('.text2').fadeOut();
  });
});
$(document).ready(function () {
  $('.text3').hide();
  $('.photo3').animate({
    opacity: 1

  });

  $('.photo3').hover(function () {
    $(this).stop().animate({ opacity: .4 }, 200);
    $('.text3').fadeIn();

  }, function () {
    $(this).stop().animate({ opacity: 1 }, 500)
    $('.text3').fadeOut();
  });
});
$(document).ready(function () {
  $('.text4').hide();
  $('.photo4').animate({
    opacity: 1

  });

  $('.photo4').hover(function () {
    $(this).stop().animate({ opacity: .4 }, 200);
    $('.text4').fadeIn();

  }, function () {
    $(this).stop().animate({ opacity: 1 }, 500)
    $('.text4').fadeOut();
  });
});
$(document).ready(function () {
  $('.text5').hide();
  $('.photo5').animate({
    opacity: 1

  });

  $('.photo5').hover(function () {
    $(this).stop().animate({ opacity: .4 }, 200);
    $('.text5').fadeIn();

  }, function () {
    $(this).stop().animate({ opacity: 1 }, 500)
    $('.text5').fadeOut();
  });
});
$(document).ready(function () {
  $('.text6').hide();
  $('.photo6').animate({
    opacity: 1

  });

  $('.photo6').hover(function () {
    $(this).stop().animate({ opacity: .4 }, 200);
    $('.text6').fadeIn();

  }, function () {
    $(this).stop().animate({ opacity: 1 }, 500)
    $('.text6').fadeOut();
  });
});
$(document).ready(function () {
  $('.text7').hide();
  $('.photo7').animate({
    opacity: 1

  });

  $('.photo7').hover(function () {
    $(this).stop().animate({ opacity: .4 }, 200);
    $('.text6').fadeIn();

  }, function () {
    $(this).stop().animate({ opacity: 1 }, 500)
    $('.text7').fadeOut();
  });
});
