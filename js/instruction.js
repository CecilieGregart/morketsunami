console.log("Loaded instructions...");

// Fang SVG-elementer
const svg = document.querySelector(".info-graphic svg");

// DRÅBERNE (alle .st9)
const drops = svg.querySelectorAll(".st9");

// HUSET (døren .st10)
const house = svg.querySelector(".st10");

// KNAPPER
document.querySelector("#varsel").addEventListener("click", varselF);
document.querySelector("#flugt").addEventListener("click", flugtF);
document.querySelector("#sikkerhed").addEventListener("click", sikkerhedF);

// --- GØR KNAPPERNE KLIKBARE IGEN (fjerner animation-klasser når de er færdige) ---

// Når dråbe-animationen er færdig, fjern .grow igen
drops.forEach((d) => {
  d.addEventListener("animationend", () => {
    d.classList.remove("grow");
  });
});

// Når hus-animering er færdig, fjern .jump
house.addEventListener("animationend", () => {
  house.classList.remove("jump");
});

// Når hele svg har blinket færdig, fjern .flash
svg.addEventListener("animationend", () => {
  svg.classList.remove("flash");
});

// VARSEL – dråber vokser
function varselF() {
  drops.forEach((d) => {
    d.classList.add("grow");
  });
}

// FLUGT – huset hopper
function flugtF() {
  house.classList.add("jump");
}

// SIKKERHED – hele svg blinker
function sikkerhedF() {
  svg.classList.add("flash");
}
