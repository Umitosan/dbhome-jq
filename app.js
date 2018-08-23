
// custom jquery scroll function
$.fn.scrollView = function() {
  return this.each(function() {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
};





$(document).ready(function() {
  console.log("<PAGE LODED>");

  $('#p1').click(function() {
    $('#panel-1').scrollView();
  });
  $('#p2').click(function() {
    $('#panel-2').scrollView();
  });
  $('#p3').click(function() {
    $('#panel-3').scrollView();
  });



});
