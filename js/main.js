document.querySelector("#geo_pin").addEventListener("click", infoPin);
document.querySelector("#ear_left").addEventListener("click", infoEar);
document.querySelector("#portal").addEventListener("click", infoPortal);

function infoPin() {
  console.log("infoPin");
  document.querySelector(".info-text > h2").textContent = "PIN";
  document.querySelector(".info-subheadline").textContent = "Here er vigtig information om lokalisering";
  document.querySelector("#efficiency").innerHTML = "<h3>KILDEPUNKT:</h3><p> Den røde indikator markerer lækagernes epicenter.</p> Hvis pinnen blinker synkront med din egen puls, skal du straks afbryde visuel kontakt og søge mod en 'Drømfri Zone'.";
}

function infoEar() {
  console.log("infoEar");
  document.querySelector(".info-text > h2").textContent = "EAR";
}

function infoEar() {
  console.log("infoPortal");
  document.querySelector(".info-text > h2").textContent = "PORTAL";
}
