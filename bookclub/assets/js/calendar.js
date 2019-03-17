function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var monthNames = ["JAN", "FEB", "MAR", "APR", "May", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];

    document.getElementsByClassName("currentdate")[0].getElementsByTagName('sub')[0].innerHTML = h + ":" + m + ":" + s;
    document.getElementsByClassName("currentdate")[0].getElementsByTagName('abbr')[0].innerHTML = monthNames[today.getMonth()];
    document.getElementsByClassName("currentdate")[0].getElementsByTagName('span')[0].innerHTML = today.getDate();

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}
startTime()