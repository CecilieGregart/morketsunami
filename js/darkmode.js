const toggleBtn = document.querySelector(".theme-toggle");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");
});

// Når du klikker på din switch knap (toggle buttom) skifter den til darkmode//
