// $(window).scroll(function () {
//   if ($(this).scrollTop()) {
//     $('#backTop').fadeIn();
//   } else {
//     $('#backTop').fadeOut();
//   }
// });

$(window).on('orientationchange resize load', function () {
  ww = $(window).width();
  if (ww < 1024) {

  }
});

$(function() {
  $('input[name=post-format]').on('click init-post-format', function() {
      $('#paypal-buttons').toggle($('#customRadio1').prop('checked'));
  }).trigger('init-post-format');
});

$(function () {

  $("#backTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

});

$(window).on('load',function(){
  $('#modal-gdpr').modal('show');
});