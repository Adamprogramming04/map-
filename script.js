
var map = L.map('map').setView([51.505, -0.09], 2);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


setInterval(function() {
    var marker = L.marker(getRandomLatLng(), {
        icon: blinkingIcon
    }).addTo(map);
    setTimeout(function() {
        map.removeLayer(marker);
    }, 2000); 
}, 3000);


function getRandomLatLng() {
    var lat = (Math.random() * 180) - 90;
    var lng = (Math.random() * 360) - 180;
    return [lat, lng];
}


var blinkingIcon = L.divIcon({
    className: 'blinking-icon',
    iconSize: [20, 20],
});
