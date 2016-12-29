
$(function(){	// Handler for .ready() called.


var mymap = L.map('mapid').setView([51.505, -0.09], 13);
/*** mapbox -> leaflet 's style URL: 
L.tileLayer('https://api.mapbox.com/styles/v1/helenwong/ciw78naji000b2pnqf2p55084/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVsZW53b25nIiwiYSI6ImNpdzc2czZ3cDAwaHQyeXFzaXdtbjZzNW4ifQ.fIWixGtUzAfMAyXRrY-12w').addTo(mymap);

***/
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'helenwong/ciw78naji000b2pnqf2p55084/tiles/256',
    accessToken: 'pk.eyJ1IjoiaGVsZW53b25nIiwiYSI6ImNpdzc2czZ3cDAwaHQyeXFzaXdtbjZzNW4ifQ.fIWixGtUzAfMAyXRrY-12w'
}).addTo(mymap);


});