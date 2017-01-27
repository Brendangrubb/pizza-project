// Business Logic
var works = console.log("This Part Works!");
var worksToo = console.log("This Part Works, Too!!");

// CONSTRUCTORS
function Order(size, toppings, cost, customer) {
  this.size = size;
  this.toppings = [];
  this.cost = cost;
  this.customer = customer;
};

function Topping(name, type, upcharge) {
  this.name = name;
  this.type = type;
  this.upcharge = upcharge;
};

function Customer(name, number, address) {
  this.name = name;
  this.number = number;
  this.address = [];
};

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
};









// UI Logic
$(document).ready(function() {



// BUTTON to choose custom or premade and enter choose size
  $("#custom-pizza-button").click(function() {
    $("#welcome-page").hide();
    $("#custom-size-page").fadeIn(1000);
  });
// BUTTONS to choose size and enter select toppings
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
// BUTTON to select toppings and enter review order
  $("#choose-toppings-custom-button").click(function() {
    $("#custom-choose-topping-page").hide();
    $("#custom-order-review-page").fadeIn(1500);
  });
// BUTTON to review order and enter customer contact
  $("#enter-delivery-information-button").click(function() {
    $("#custom-order-review-page").hide();
    $("#customer-contact-page").fadeIn(1500);
  });
// BUTTON to enter customer contact and reach final confirmation page
  $("#go-to-confirmation-page").click(function() {
    $("#customer-contact-page").hide();
    $("#final-confirmation-page").fadeIn(1500);
  });

});
