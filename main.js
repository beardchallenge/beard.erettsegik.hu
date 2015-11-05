function sticky_relocate() {
  var window_top = $(window).scrollTop();
  var div_top = $('#jump-anchor').offset().top;
  if (window_top > div_top) {
    $('#jump').addClass('sticky');
  } else {
    $('#jump').removeClass('sticky');
  }
}

$(function () {
  $(window).scroll(sticky_relocate);
  sticky_relocate();
});
