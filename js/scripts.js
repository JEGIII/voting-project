$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 16) {
    $('#approved').show();
  } else {
    $('#declined').show();
  }
});