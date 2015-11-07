$(document).on("swipe", function() {
  var s = window.location.href;
  if (s.indexOf("newcomers") > -1) {
    window.location.assign('/');
  } else {
    window.location.assign('/newcomers');
  }
});
