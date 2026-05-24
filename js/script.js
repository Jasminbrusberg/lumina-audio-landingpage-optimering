"use strict";

// Finder produktbilledet
const productImage = document.querySelector("#product-image");

// Finder alle farveknapperne
const colorButtons = document.querySelectorAll(".color-option");

// Looper alle farveknapper igennem
for (const button of colorButtons) {
  button.addEventListener("click", function () {
    // Henter billedet fra data-image i HTML
    const newImage = button.dataset.image;

    // Henter alt-teksten fra data-alt i HTML
    const newAlt = button.dataset.alt;

    // Skifter produktbilledet
    productImage.src = newImage;

    // Skifter alt-teksten
    productImage.alt = newAlt;

    // Fjerner active fra alle farveknapper
    for (const colorButton of colorButtons) {
      colorButton.classList.remove("active");
    }

    // Tilføjer active til den knap, brugeren klikkede på
    button.classList.add("active");
  });
}
