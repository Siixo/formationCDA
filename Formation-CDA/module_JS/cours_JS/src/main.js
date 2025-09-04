import "./style.css";
import { animate, text, stagger } from "animejs";

// Timeline
import timelineSteps from "./services/js/timelineData";
import { fillTimeline } from "./services/js/timelineService";
const timeline = document.getElementById("timeline");

fillTimeline(timelineSteps, timeline);

import eastereggs from "easter-egg-collection";

const { chars } = text.split("#bouncy-text", {
  chars: { wrap: true }, // Wrap chars for overflow safety
});

animate(chars, {
  translateY: ["100%", "0%"], // Bounce up
  duration: 600,
  easing: "easeOutElastic(1, .5)", // Bouncy easing
  delay: stagger(100), // Stagger per char
  loop: true,
  direction: "alternate", // Bounce back down
  loopDelay: 1000,
});

// Chargement navbar et footer
fetch("/src/components/header.html")
  .then((res) => res.text())
  .then((html) => {
    const navbar = document.getElementById("navbar");
    navbar.innerHTML = html;
  });

fetch("/src/components/footer.html")
  .then((res) => res.text())
  .then((html) => {
    const navbar = document.getElementById("footer");
    footer.innerHTML = html;
  });

//
let element = document.getElementById("element");
let bouton = document.getElementById("bouton1");
const textarea = document.getElementById("Textarea");
const button = document.getElementById("myButton");

let counter = 0;

//Initialisation du texte + récupération localStorage
element.innerText = "Cliquer ici!";
element.classList.add("text-white");
getLocalStorage();

bouton.addEventListener("click", (event) => {
  event.preventDefault();
  switch (counter) {
    case 0:
      element.innerText = "Reclique!";
      counter++;
      break;
    case 1:
      element.innerText = "Cliquer ici!";
      counter = 0;
      break;
  }
});

textarea.addEventListener("input", (e) => {
  if (textarea.value.length > 5) {
    button.disabled = true; // lock the button
    button.innerText = "Trop long"; // change button text);
  } else {
    button.disabled = false; // unlock the button
  }
  setLocalStorage();
});

//compteur de chocoblasts
const maxime = { nom: "Maxime", chocoblasts: 0 };
const margot = { nom: "Margot", chocoblasts: 0 };
const emilie = { nom: "Emilie", chocoblasts: 0 };
const lucas = { nom: "Lucas", chocoblasts: 0 };
const victor = { nom: "Victor", chocoblasts: 0 };
const thomas = { nom: "Thomas", chocoblasts: 0 };
const guillaume = { nom: "Guillaume", chocoblasts: 0 };
const yann = { nom: "Yann", chocoblasts: 0 };
const nicolas = { nom: "Nicolas", chocoblasts: 0 };
const lisouille = { nom: "Lisouille", chocoblasts: 0 };
const steven = { nom: "Steven", chocoblasts: 0 };
const wilfried = { nom: "Wilfried", chocoblasts: 0 };

let tab = [
  maxime,
  margot,
  emilie,
  lucas,
  victor,
  thomas,
  guillaume,
  yann,
  nicolas,
  lisouille,
  steven,
  wilfried,
];

const tableBody = document.getElementById("player-table");

tab.forEach((player, index) => {
  const row = document.createElement("tr");
  row.className = "bg-gray-900";

  row.innerHTML = `
    <td class="px-3 py-2 whitespace-nowrap font-medium sticky left-0 bg-gray-900 text-white">
      ${player.nom}
    </td>
    <td class="px-3 py-2 whitespace-nowrap flex gap-4 items-center">
      <svg id="minus-${index}" class="w-8 cursor-pointer" viewBox="516 1087 32 32" xmlns="http://www.w3.org/2000/svg">
  <g fill="#fff">
    <path d="M532,1117 C524.268,1117 518,1110.73 518,1103 C518,1095.27 524.268,1089 532,1089 C539.732,1089 546,1095.27 546,1103 C546,1110.73 539.732,1117 532,1117 Z M532,1087 C523.163,1087 516,1094.16 516,1103 C516,1111.84 523.163,1119 532,1119 C540.837,1119 548,1111.84 548,1103 C548,1094.16 540.837,1087 532,1087 Z M538,1102 L526,1102 C525.447,1102 525,1102.45 525,1103 C525,1103.55 525.447,1104 526,1104 L538,1104 C538.553,1104 539,1103.55 539,1103 C539,1102.45 538.553,1102 538,1102 Z"></path>
  </g>
</svg>

      <span class="text-white" id="count-${index}">${player.chocoblasts}</span>
      <svg id="plus-${index}" class="w-8 h-8 cursor-pointer" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="white">
  <path d="M14 4h4v10h10v4H18v10h-4V18H4v-4h10z"/>
</svg>

    </td>
  `;

  tableBody.appendChild(row);

  // Add click events for minus and plus
  document.getElementById(`minus-${index}`).addEventListener("click", () => {
    console.log(`Minus clicked for ${player.nom}`);
    if (player.chocoblasts > 0) player.chocoblasts--;
    document.getElementById(`count-${index}`).textContent = player.chocoblasts;
  });

  document.getElementById(`plus-${index}`).addEventListener("click", () => {
    console.log(`Plus clicked for ${player.nom}`);
    player.chocoblasts++;
    document.getElementById(`count-${index}`).textContent = player.chocoblasts;
  });
});

function setLocalStorage() {
  localStorage.setItem(textarea.id, textarea.value);
  localStorage.setItem("players", JSON.stringify(tab));
}
function getLocalStorage() {
  const value = localStorage.getItem(textarea.id);
  const players = localStorage.getItem("players");

  if (players) {
    tab = JSON.parse(players);
    tab.forEach((player, index) => {
      document.getElementById(`count-${index}`).textContent =
        player.chocoblasts;
    });
  }

  if (value) {
    textarea.value = value;
  }
}

//Exercice Timeline
