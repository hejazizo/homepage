﻿// Set the date we're counting down to


// Update the count down every 1 second
var x = setInterval(function() {

    var next_date = document.getElementById("next_date").innerHTML;
    var countDownDate = new Date(next_date  ).getTime();

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="deadline"
    document.getElementById("deadline").innerHTML = " " + days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";
    document.getElementById("deadline").style.color = "#DC143C";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("next_book").style.display = "none";
        document.getElementById("deadline").style.color = "GREEN";
    }
}, 1000);