// var map = L.map("map").setView([28.606464, 77.3881856], 13);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// var myIcon = L.icon({
//   iconUrl: "../images/icon-location.svg",
//   iconSize: [38, 95],
//   iconAnchor: [22, 94],
//   popupAnchor: [-3, -76],
//   shadowAnchor: [22, 94],
// });

// L.marker([28.606464, 77.3881856], { icon: myIcon }).addTo(map);

// var mapOptions = {
//   center: [28.6031872, 77.3881856],
//   zoom: 14,
// };

// var map = new L.map("map", mapOptions);

// var layer = new L.TileLayer(
//   "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// );

// layer.addTo(map);

// // map.addLayer(layer);

// var marker = L.marker([28.6031872, 77.3881856]);

// marker.bindPopup("Hi Welcome to Tutorialspoint").openPopup();

// marker.addTo(map);

const map = L.map("map").setView([28.628151, 77.367783], 13);
const attribution = "&copy; OpenStreetMap contributors coded by Arslan";
const tiles = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution,
});
tiles.addTo(map);

// const circleLayer = L.circle([28.628151, 77.367783], {
//   radius: 200,
//   color: "yellow",
//   stroke: false,
// });
// circleLayer.addTo(map);

const marker = L.marker([28.628151, 77.367783], { color: "red" });
marker.addTo(map);
