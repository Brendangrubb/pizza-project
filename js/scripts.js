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

function Customer(name, number) {
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
  // event.preventDefault();

// BUTTONS
// button to choose custom or premade and enter choose size
  $("#custom-pizza-button").click(function() {
    $("#welcome-page").hide();
    $("#custom-size-page").fadeIn(1000);
  });
// buttonS to choose size and enter select toppings
  var size = $();

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
// button to select toppings and enter review order
  $("#choose-toppings-custom-button").click(function() {
    $("#custom-choose-topping-page").hide();
    $("#custom-order-review-page").fadeIn(1500);
  });
// button to review order and enter customer contact
  $("#enter-delivery-information-button").click(function() {

    $("#custom-order-review-page").hide();
    $("#customer-contact-page").fadeIn(1500);
  });
// button to enter customer contact and reach final confirmation page
  $("#go-to-confirmation-page").click(function() {
    var nameInput = $("#name-input").val();
    var phoneInput = $("#phone-input").val();
    var streetInput = $("#street-input").val();
    var cityInput = $("#city-input").val();
    var stateInput = $("#state-input").val();
    var newCustomer = new Customer(nameInput, phoneInput);
    var newAddress = new Address(streetInput, cityInput, stateInput);
    console.log(newAddress);
    newCustomer.address.push(newAddress);
    console.log(newCustomer);

    $("#final-confirmation-name").text(newCustomer.name);
    $("#final-confirmation-address").text(newAddress.street);
    $("#final-confirmation-city").text(newAddress.city);
    $("#final-confirmation-state").text(newAddress.state);
    $("#customer-contact-page").hide();
    $("#final-confirmation-page").fadeIn(1500);
  });
// button back to main page
  $("#back-to-welcome-page").click(function() {
    $("#final-confirmation-page").hide();
    $("#welcome-page").fadeIn(1500);
  });

});
