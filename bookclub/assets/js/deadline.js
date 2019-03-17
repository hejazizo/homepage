// Set the date we're counting down to
var countDownDate = new Date("APR 06, 2019 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

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
    document.getElementById("deadline").style.color = "GREEN";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("deadline").innerHTML = " EXPIRED";
        document.getElementById("deadline").style.color = "red";
    }
}, 1000);