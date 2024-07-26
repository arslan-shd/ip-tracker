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

let getLocationPromise = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position)
      //   (error) => reject(error)
    );
  });
};

function getLocation() {
  getLocationPromise().then((res) => {
    // If promise get resolved
    const { coords } = res;
    console.log(coords.latitude, coords.longitude);

    const map = L.map("map").setView([coords.latitude, coords.longitude], 13);
    const attribution = "&copy; OpenStreetMap contributors coded by Arslan";
    const tiles = L.tileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution,
      }
    );
    tiles.addTo(map);

    const marker = L.marker([coords.latitude, coords.longitude]);
    marker.addTo(map);
  });
}

getLocation();

// const map = L.map("map").setView([28.6025505, 77.3767544], 13);
// const attribution = "&copy; OpenStreetMap contributors coded by Arslan";
// const tiles = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution,
// });
// tiles.addTo(map);

// const marker = L.marker([28.6025505, 77.3767544]);
// marker.addTo(map);

// console.log(latLong());
