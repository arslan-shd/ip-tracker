import { fetchMultipleAPI } from "./api.js";
import { map } from "./script/map.js";

let locationObj = await fetchMultipleAPI();
console.log(locationObj);

const ipSearchInput = document.getElementById("ip-search");
const searchBtn = document.getElementById("search-btn");
const ip = document.getElementById("ip");
const location = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("isp");

searchBtn.addEventListener("click", () => {
  searchAction();
});

ipSearchInput.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    searchAction();
  }
});

const searchAction = async () => {
  const ipInput = ipSearchInput.value;
  if (ipInput) {
    console.log(ipInput);
    const res = await fetch(
      `https://api.ipdata.co/${ipInput}?api-key=0f582c76fa19606daddae604da1d10021ebd933d13fe904a32894451`
    );
    locationObj = await res.json();
    console.log(locationObj);

    const ip = document.getElementById("ip");
    const location = document.getElementById("location");
    const timezone = document.getElementById("timezone");
    const isp = document.getElementById("isp");

    ip.innerText = locationObj.ip;

    location.innerText = locationObj.city || locationObj.country_name;
    timezone.innerText = locationObj.time_zone.abbr
      ? `${locationObj.time_zone.abbr} ${locationObj.time_zone.offset}`
      : "Unavailable";
    isp.innerText = locationObj.asn.name || "Unavailable";
  } else {
    alert("Please enter IP Address");
  }

  // render map

  console.log(
    locationObj.latitude,
    locationObj.longitude,
    "from api after search"
  );

  console.log(map);
  if (map) {
    map.remove();
  }

  renderMap(map);
};

const renderMap = (map) => {
  map = new L.map("map");

  map.setView([locationObj.latitude, locationObj.longitude], 13);
  const attribution = "&copy; OpenStreetMap contributors coded by Arslan";
  const tiles = L.tileLayer(
    "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution,
    }
  );
  tiles.addTo(map);

  const marker = L.marker([locationObj.latitude, locationObj.longitude]);
  marker.addTo(map);

  const popuUp = marker.bindPopup(`<h2>Your IP Location</h2>`);
  popuUp.addTo(map);
};

ip.innerText = locationObj.ip;
location.innerText = locationObj.city || locationObj.country_name;
timezone.innerText = locationObj.time_zone.abbr
  ? `${locationObj.time_zone.abbr} ${locationObj.time_zone.offset}`
  : "Unavailable";
isp.innerText = locationObj.asn.name || "Unavailable";
