// Business Logic

// CONSTRUCTORS
function Order(size) {
  this.size = "";
  this.toppings = [];
  this.cost = [];
};

function Topping(name, type, upcharge) {
  this.name = name;
  this.type = type;
  this.upcharge = upcharge;
};

function Customer(name, phone) {
  this.name = name;
  this.phone = phone;
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

var newOrder;
var newCustomer;

// BUTTONS
// button to choose custom or premade and enter choose size
  $("#custom-pizza-button").click(function() {
    $("#welcome-page").hide();
    $("#custom-size-page").fadeIn(1000);
  });
// buttonS to choose size and enter select toppings
  $("#small-custom-button").click(function() {
    var newOrder = new Order();
    newOrder.size = ("small");
    $("#order-review-size").text(newOrder.size);
    $("#final-confirmation-size").text(newOrder.size);
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);
    console.log(newOrder);

  });
  $("#medium-custom-button").click(function() {
    var newOrder = new Order();
    newOrder.size = ("medium");
    $("#order-review-size").text(newOrder.size);
    $("#final-confirmation-size").text(newOrder.size);
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);
    console.log(newOrder);

  });
  $("#large-custom-button").click(function() {
    var newOrder = new Order();
    newOrder.size = ("large");
    $("#order-review-size").text(newOrder.size);
    $("#final-confirmation-size").text(newOrder.size);
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);
    console.log(newOrder);

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
    newCustomer.address.push(newAddress);
    $("#final-confirmation-name").text(newCustomer.name);
    $("#final-confirmation-address").text(newAddress.street);
    $("#final-confirmation-city").text(newAddress.city);
    $("#final-confirmation-state").text(newAddress.state);
    $("#final-confirmation-phone").text(newCustomer.phone);
    $("#customer-contact-page").hide();
    $("#final-confirmation-page").fadeIn(1500);
  });

// button back to main page
  $("#back-to-welcome-page").click(function() {
    $("#final-confirmation-page").hide();
    $("#welcome-page").fadeIn(1500);
  });

});
