// let installPromptEvent;

// window.addEventListener("beforeinstallprompt", (event) => {
//   event.preventDefault();
//   installPromptEvent = event;

//   let installButton = document.createElement("button");
//   installButton.textContent = "Zainstaluj aplikację";
//   installButton.className = "btn btn-success";
//   installButton.style.display = "block";
//   installButton.onclick = () => {
//     installPromptEvent.prompt();
//     installPromptEvent.userChoice.then((choiceResult) => {
//       if (choiceResult.outcome === "accepted") {
//         console.log("Użytkownik zaakceptował instalację");
//       } else {
//         console.log("Użytkownik anulował instalację");
//       }
//       installPromptEvent = null;
//     });
//   };

//   document.body.appendChild(installButton);
// });

function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => (p.style.display = "none"));
  document.getElementById(page).style.display = "block";
  if (page !== "map") {
    hideMap()
  }
}

function hideMap() {
  document.getElementById("map").style.display = "none";
}

function getLocation() {
  // showPage("mapid")
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let map = L.map("mapid").setView([lat, lon], 13);
      // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
      L.marker([lat, lon])
        .addTo(map)
        .bindPopup("Twoja lokalizacja")
        .openPopup();
      setTimeout(() => { 
        map.invalidateSize(); 
      }, 500);
    });
  } else {
    alert("Twoja przeglądarka nie obsługuje geolokalizacji.");
  }
}


function sendSOS() {
  navigator.vibrate([300, 300, 300, 900, 900, 900, 300, 300, 300]);
  alert("SOS wysłane!");
}
