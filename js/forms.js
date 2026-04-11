//  LABEL MAPS

const laekageLabels = {
  kronologisk: "Kronologisk kollaps",
  figurativ: "Figurativ overblødning",
  sceneskift: "Sceneskift uden overgang",
  ekstern: "Ekstern realitetsintrusion",
};

const gradLabels = {
  0: "Grad 0 — Ingen overblødning registreret",
  1: "Grad 1 — Sporadiske billeder ved opvågning",
  2: "Grad 2 — Vedvarende stemning i vågentilstand",
  3: "Grad 3 — Fragmenteret handlekraft (over 4 timer)",
  4: "Grad 4 — Identitetstab / systemkritisk tilstand",
};

const symptomLabels = {
  dejavu: "Gentagne déjà vu-episoder",
  ansigter: "Ukendte ansigter i periferien",
  sprog: "Besvær med at formulere sig verbalt",
  tyngde: "Fysisk tyngdefornemmelse",
  arkitektur: "Ukendt arkitektur i kendte rum",
  tid: "Tidsdistortion (timer føles som minutter)",
};

//  INIT

document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.querySelector("input[type='range']");
  const rangeValue = document.querySelector("#range-value");
  const webform = document.querySelector("#webform");

  // Range
  rangeInput.addEventListener("input", function () {
    rangeValue.textContent = rangeInput.value;
    if (rangeInput.value <= 24) {
      rangeInput.style.accentColor = "#6b8fc4";
    } else if (rangeInput.value <= 48) {
      rangeInput.style.accentColor = "#c97a4a";
    } else {
      rangeInput.style.accentColor = "#e85d5d";
    }
  });

  // Invalid — suppress browser tooltip, add error class
  document.querySelectorAll("input, select, textarea").forEach(function (el) {
    el.addEventListener("invalid", function (e) {
      e.preventDefault();
      el.classList.add("field-error");
    });
    el.addEventListener("input", function () {
      el.classList.remove("field-error");
    });
    el.addEventListener("change", function () {
      el.classList.remove("field-error");
    });
  });

  // Submit
  webform.addEventListener("submit", function (e) {
    e.preventDefault();
    handleSubmit(webform);
  });
});

// SUBMIT → SUMMARY

function handleSubmit(webform) {
  const data = new FormData(webform);

  const navn = data.get("navn") || "–";
  const juridisk = data.get("juridisk") || "–";
  const email = data.get("email") || "–";
  const tlf = data.get("tlf") || "–";
  const type = laekageLabels[data.get("laekagetype")] || "–";
  const grad = gradLabels[data.get("grad")] || "–";
  const varighed = data.get("varighed") || "0";
  const beskriv = data.get("beskriv") || "–";

  const symptoms = data.getAll("symptom");
  const symptomList = symptoms.length
    ? symptoms
        .map(function (s) {
          return `<li>${symptomLabels[s] || s}</li>`;
        })
        .join("")
    : "<li>Ingen angivet</li>";

  document.querySelector("#form-summary article").innerHTML = `
    <h3>Patient</h3>
    <p>${navn} / ${juridisk}<br>${email}<br>${tlf}</p>

    <h3>Primær lækagetype</h3>
    <p>${type}</p>

    <h3>Kontaminationsgrad</h3>
    <p>${grad}</p>

    <h3>Varighed</h3>
    <p>${varighed} timer</p>

    <h3>Symptomer</h3>
    <ul>${symptomList}</ul>

    <h3>Beskrivelse</h3>
    <p>${beskriv}</p>
  `;

  document.querySelector("#form-summary").scrollIntoView({ behavior: "smooth" });
}
