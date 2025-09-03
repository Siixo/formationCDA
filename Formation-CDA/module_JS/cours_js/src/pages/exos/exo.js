let element = document.getElementById("element");
let bouton = document.getElementById("bouton1");
let counter = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  element.innerText = "Cliquer ici!";
  element.classList.add("text-white");
});

bouton.addEventListener("click", (event) => {
  //   if (element) {
  //     if (counter == 0 || counter % 2 == 0) {
  //       element.innerText = "Bon toutou!";
  //       counter++;
  //     } else {
  //       element.innerText = "Cliquer ici!";
  //       counter++;
  //     }
  //   }
  event.preventDefault();
  switch (counter) {
    case 0:
      element.innerText = "Bon toutou!";
      counter++;
      break;
    case 1:
      element.innerText = "Cliquer ici!";
      counter = 0;
      break;
  }
});

// // Lessons Event Clavier
// const inputTextElement = document.getElementById("input-text");
// const renderKeyElement = document.getElementById("renderKey");
// // console.log(inputTextElement);
// inputTextElement.addEventListener("keyup", (eventDuclavier) => {
//   // console.log(eventDuclavier);
//   console.log("eventDuclavier.key", eventDuclavier.key);
//   renderKeyElement.textContent += eventDuclavier.key;
// });

const textarea = document.getElementById("Textarea");
const button = document.getElementById("myButton");

textarea.addEventListener("input", (e) => {
  if (textarea.value.length > 5) {
    button.disabled = true; // lock the button
    button.innerText = "Trop long"; // change button text);
  } else {
    button.disabled = false; // unlock the button
  }
});
