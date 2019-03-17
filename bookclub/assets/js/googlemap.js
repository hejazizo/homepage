// <!-- GOOGLE MAP SCRIPT -->
function initMap() {
    var uluru = {
        lat: 53.521331248,
        lng: 113.521331248
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
