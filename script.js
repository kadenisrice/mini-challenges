"use strict";

// NUMBER 1 - VENDING MACHINE ---------------------------------------------------

// selectors & variables
const colaButton = document.querySelector(".cola");
const peanutButton = document.querySelector(".peanuts");
const chocolateButton = document.querySelector(".chocolate");
const gummyButton = document.querySelector(".gummies");

const totalP = document.querySelector("p.total");
let vendingTotal = 0;

// EVENTS
colaButton.addEventListener("click", () => {
  vendingTotal += 2;
  totalP.textContent = `Total: $${vendingTotal}`;
});

peanutButton.addEventListener("click", () => {
  vendingTotal += 3;
  totalP.textContent = `Total: $${vendingTotal}`;
});

chocolateButton.addEventListener("click", () => {
  vendingTotal += 4;
  totalP.textContent = `Total: $${vendingTotal}`;
});

gummyButton.addEventListener("click", () => {
  vendingTotal += 6;
  totalP.textContent = `Total: $${vendingTotal}`;
});

// NUMBER 2 - MAKE MONEY ---------------------------------------------------------

// selectors & variables:
const form = document.querySelector(".main-form");
const coinContainer = document.querySelector(".coin-container");

// EVENTS:
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const coinAmount = document.querySelector("#amount").value;
  const coinType = document.querySelector("#type").value;

  for (let i = 0; i < coinAmount; i++) {
    // creating coin (section)
    const newSection = document.createElement("section");
    newSection.textContent = coinType;
    newSection.classList.add(coinType);
    // we have to still add content and class
    coinContainer.append(newSection);
  }
});

// NUMBER 3 - LIGHT BULB ---------------------------------------------------------

// selectors & variables:

const onButton = document.querySelector(".on");
const offButton = document.querySelector(".off");
const toggleButton = document.querySelector(".toggle");
const endButton = document.querySelector(".end");
const allButton = document.querySelector(".buttons");

const lightBulb = document.querySelector(".light-bulb");

// EVENTS:

onButton.addEventListener("click", () => {
  console.log("she is on");
  lightBulb.style.backgroundColor = "rgb(219, 219, 219)";
});

offButton.addEventListener("click", () => {
  console.log("she is off");
  lightBulb.style.backgroundColor = "rgb(75, 75, 75)";
});

toggleButton.addEventListener("click", () => {
  console.log("she is toggled");
  if (lightBulb.style.backgroundColor === "rgb(219, 219, 219)") {
    lightBulb.style.backgroundColor = "rgb(75, 75, 75)";
  } else {
    lightBulb.style.backgroundColor = "rgb(219, 219, 219)";
  }
});

endButton.addEventListener("click", () => {
  console.log("she has ended");
  lightBulb.remove();

  endButton.disabled = true;
  toggleButton.disabled = true;
  offButton.disabled = true;
  onButton.disabled = true;
});
