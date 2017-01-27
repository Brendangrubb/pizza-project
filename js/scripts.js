// Business Logic
var works = console.log("This Part Works!");
var worksToo = console.log("This Part Works, Too!!");









// UI Logic
$(document).ready(function() {



// BUTTON to choose custom or premade
  $("#custom-pizza-button").click(function() {
    $("#welcome-page").hide();
    $("#custom-size-page").fadeIn(1000);
  });
// BUTTONS to choose size
  $("#small-custom-button").click(function() {
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);
  });
  $("#medium-custom-button").click(function() {
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);
  });
  $("#large-custom-button").click(function() {
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);
  });
// BUTTON to select toppings



});
