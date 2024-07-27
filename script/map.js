// HTML GEOLOCATION

let map = null;
let getLocationPromise = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

function getLocation() {
  getLocationPromise()
    .then((res) => {
      // If promise get resolved
      const { coords } = res;
      console.log(coords.latitude, coords.longitude, " from geolocation");

      renderMap(coords);
    })
    .catch((err) => {
      alert(err.message);
    });
}

const renderMap = (coords) => {
  if (!map) {
    map = new L.map("map");
    map.setView([coords.latitude, coords.longitude], 13);
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

    const popuUp = marker.bindPopup(`<h2>Your IP Location</h2>`);
    popuUp.addTo(map);
  }
};

getLocation();

export { map };
