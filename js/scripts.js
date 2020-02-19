$(document).ready(function() {
  var over16 = confirm("Are you over 16? Click OK for yes or Cancel for no.");

  if (over16) {
    $('#approved').show();
  } else {
    $('#declined').show();
  }
});