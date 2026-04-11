// CLICK LISTENERS

document.querySelector("#geo_pin").addEventListener("click", infoPin);
document.querySelector("#portal").addEventListener("click", infoPortal);
document.querySelector("#ear_left").addEventListener("click", infoEarLeft);
document.querySelector("#ear_right").addEventListener("click", infoEarRight);
document.querySelector("#nose").addEventListener("click", infoNose);
document.querySelector("#eye_left_planet").addEventListener("click", infoEyeLeft);
document.querySelector("#eye_right_star").addEventListener("click", infoEyeRight);

//  HOTSPOT LIST

var hotspots = ["#geo_pin", "#portal", "#ear_left", "#ear_right", "#nose", "#eye_left_planet", "#eye_right_star"];

//  CLICK FUNCTIONS

function infoPin() {
  resetActive();
  document.querySelector("#geo_pin").classList.add("active");

  document.querySelector(".info-text > h2").textContent = "Lokalisering";
  document.querySelector(".info-subheadline").textContent = "Her er vigtig information om lokalisering";
  document.querySelector("#efficiency").innerHTML = "<h3>Kildepunkt</h3><p>Den røde indikator markerer lækagernes epicenter. Hvis pinnen blinker synkront med din egen puls, skal du straks afbryde visuel kontakt og søge mod en Drømfri Zone.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Protokol</h3><p>Notér præcis GPS-koordinat. Koordinaten indgår i den officielle DL-rapport og bruges til at kortlægge spredningens retning over de næste 3 søvncyklusser.</p>";
}

function infoPortal() {
  resetActive();
  document.querySelector("#portal").classList.add("active");

  document.querySelector(".info-text > h2").textContent = "Portal";
  document.querySelector(".info-subheadline").textContent = "Overgangszonen mellem drøm og vågentilstand";
  document.querySelector("#efficiency").innerHTML = "<h3>Funktion</h3><p>Portalen er det anatomiske punkt hvor drømmemateriale krydser grænsen til bevidst perception. Grad 3+ lækager passerer primært via denne kanal.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Advarsel</h3><p>Direkte stimulering af portalzonen under aktiv lækage kan resultere i permanent narrativ kohærenstab. Kontakt certificeret drømlækageteknikker.</p>";
}

function infoEarLeft() {
  resetActive();
  document.querySelector("#ear_left").classList.add("active");

  document.querySelector(".info-text > h2").textContent = "Venstre øre";
  document.querySelector(".info-subheadline").textContent = "Primær indgangskanal for auditiv drømlækage";
  document.querySelector("#efficiency").innerHTML = "<h3>Symptom</h3><p>Stemmer uden afsender, musik uden kilde og ekko af ord der aldrig blev sagt højt. Det venstre øre er særligt modtageligt i REM-fase 3 og 4.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Håndtering</h3><p>Undgå stille omgivelser i minimum 4 timer efter opvågning. Baggrundsstøj på 40–60 dB anbefales som narrativ forankring.</p>";
}

function infoEarRight() {
  resetActive();
  document.querySelector("#ear_right").classList.add("active");

  document.querySelector(".info-text > h2").textContent = "Højre øre";
  document.querySelector(".info-subheadline").textContent = "Sekundær kanal — forstærker kronologisk kollaps";
  document.querySelector("#efficiency").innerHTML = "<h3>Symptom</h3><p>Det højre øre behandler temporale lyde — rækkefølgen af hændelser opløses. Typisk symptom: samtaler høres baglæns eller i forkert kontekst.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Håndtering</h3><p>Undgå musik med kompleks rytmisk struktur i 24 timer. Monotone toner på 432 Hz har vist stabiliserende effekt på narrativ kohærens.</p>";
}

function infoNose() {
  resetActive();
  document.querySelector("#nose").classList.add("active");

  document.querySelector(".info-text > h2").textContent = "Næse";
  document.querySelector(".info-subheadline").textContent = "Olfaktorisk drømlækage — lugt uden kilde";
  document.querySelector("#efficiency").innerHTML = "<h3>Symptom</h3><p>Lugte fra drømmescenarier persisterer i vågentilstand. Hyppigst rapporteret: jord efter regn, brændende materiale og ukendte blomster uden botanisk reference.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Håndtering</h3><p>Stærke neutrale dufte — f.eks. kaffegrums eller citrus — kan afbryde den olfaktoriske lækagecyklus. Anvendes i 3 × 30 sekunders intervaller.</p>";
}

function infoEyeLeft() {
  resetActive();
  document.querySelector("#eye_left_planet").classList.add("active");

  document.querySelector(".info-text > h2").textContent = "Venstre øje";
  document.querySelector(".info-subheadline").textContent = "Planetarisk perception — rumlig distortion";
  document.querySelector("#efficiency").innerHTML = "<h3>Symptom</h3><p>Det venstre øje registrerer rumlig lækage: kendte rum fremstår ukendte, afstande er fordrejede og arkitektur følger drømmens geometri frem for virkelighedens.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Håndtering</h3><p>Fokusér på et fast punkt i 90 sekunder. Hjernens spatiale kortlægning recalibreres via vedvarende visuel forankring til et stabilt objekt i det fysiske rum.</p>";
}

function infoEyeRight() {
  resetActive();
  document.querySelector("#eye_right_star").classList.add("active");

  document.querySelector(".info-text > h2").textContent = "Højre øje";
  document.querySelector(".info-subheadline").textContent = "Stjerneperseption — figurativ overblødning";
  document.querySelector("#efficiency").innerHTML = "<h3>Symptom</h3><p>Det højre øje er ansvarligt for ansigtsgenkendelse. Ved lækage optræder kendte ansigter med forkert adfærd eller fremmede ansigter i periferien af synsfeltet.</p>";
  document.querySelector("#requirement").innerHTML = "<h3>Håndtering</h3><p>Undgå menneskemængder i 2–4 timer efter opvågning. Figurativ overblødning intensiveres ved høj social stimulering i den tidlige vågenfase.</p>";
}

// RESET
function resetActive() {
  hotspots.forEach(function (selector) {
    document.querySelector(selector).classList.remove("active");
  });
}
