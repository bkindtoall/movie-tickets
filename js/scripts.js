// Business Logic for AddressBook ---------
function Ticket(age, movie, time) {
  this.age = age,
  this.time = time;
  this.movie = movie;
}

Ticket.prototype.ticketPrice = function() {
  var price = 10
  if (this.age > "65" || this.age < "12") {
    price -= 2 ;
  }
  if (this.time <= 1400) {
    price -= 3;
  } else if (this.time <= 1700 && this.time > 1400) {
    price -= 1;
  }
  return price;
}

// User Interface Logic ---------
$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    var inputtedAge = $("input#age").val();
    var inputtedTime = $("input#time").val();
    var inputtedMovies = $("#movie").attr('selected',true).val();

    $("input#age").val("");
    $("input#time").val("");
    $("#movie").val("");

    var newTicket = new Ticket(inputtedAge, inputtedMovies, inputtedTime);
    $(".show-price").show();
    $(".movie").html(inputtedMovies);
    $(".time").html(inputtedTime);
    
    var totalPrice = newTicket.ticketPrice()
    $(".output").html("Your total cost is: $" + totalPrice);

  });
});
