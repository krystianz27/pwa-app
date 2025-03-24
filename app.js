function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
  document.getElementById(page).style.display = "block";
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let map = L.map("mapid").setView([lat, lon], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );
      L.marker([lat, lon])
        .addTo(map)
        .bindPopup("Twoja lokalizacja")
        .openPopup();
    });
  } else {
    alert("Twoja przeglądarka nie obsługuje geolokalizacji.");
  }
}

function sendSOS() {
  navigator.vibrate([300, 300, 300, 900, 900, 900, 300, 300, 300]);
  alert("SOS wysłane!");
}
