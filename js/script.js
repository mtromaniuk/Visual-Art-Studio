// STARTWEB LAYOUT //
$(document).ready(function () {
    $("#window__button").click(function(){
      $(".startweb").fadeOut(900);
    });
  });


  // SLIDER //
$(".container__slideshow > .slideshow__slide:gt(0)").hide();
setInterval(function() { 
  $('.container__slideshow > .slideshow__slide:first')
    .fadeOut(1400)
    .next()
    .fadeIn(1400)
    .end()
    .appendTo('.container__slideshow');
},  5000);