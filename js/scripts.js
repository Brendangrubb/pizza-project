// Business Logic
var newOrder = new Order();
var newCustomer;
var customerToppings = [];

// CONSTRUCTORS
function Order(size) {
  this.size = "";
  this.toppings = [];
  this.cost = 0;
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

// PROTOYPE
Order.prototype.costCalculator = function() {
  for (i = 0; i < this.toppings.length; i +=1) {
    this.cost += 1;
  }

};


// this.toppings.forEach(function() {
//   this.cost += 1;
//   console.log(this.cost);
// })

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
  $("#small-custom-button").click(function() {
    newOrder.size = ("small");
    $("#order-review-size").text(newOrder.size);
    $("#final-confirmation-size").text(newOrder.size);
    newOrder.cost = 12;
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);
  });

  $("#medium-custom-button").click(function() {
    newOrder.size = ("medium");
    $("#order-review-size").text(newOrder.size);
    $("#final-confirmation-size").text(newOrder.size);
    newOrder.cost = 15;
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);

  });

  $("#large-custom-button").click(function() {
    newOrder.size = ("large");
    $("#order-review-size").text(newOrder.size);
    $("#final-confirmation-size").text(newOrder.size);
    newOrder.cost = 18;
    $("#custom-size-page").hide();
    $("#custom-choose-topping-page").fadeIn(1500);
  });

// button to select toppings and enter review order
  $("#topping-form").submit(function() {
    event.preventDefault();
    $("input:checkbox[name=pizza-toppings]:checked").each(function() {
      var chosenToppings = $(this).val();
      newOrder.toppings.push(chosenToppings);
    });
    newOrder.costCalculator();
    $("#order-review-cost").text(newOrder.cost);
    $("#final-confirmation-total").text(newOrder.cost);
    $("#order-review-toppings").text(newOrder.toppings);
    $("#final-confirmation-toppings").text(newOrder.toppings);
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
