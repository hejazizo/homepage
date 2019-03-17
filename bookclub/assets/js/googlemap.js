<!-- GOOGLE MAP SCRIPT -->
function initMap() {
    var uluru = {
        lat: 35.7040861,
        lng: 51.4091693
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

initMap();

var marker = new google.maps.Marker({
    position: uluru,
    map: map
});
