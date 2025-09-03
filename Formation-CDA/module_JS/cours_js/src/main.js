import { animate, text, stagger } from "animejs";

// Split characters inside the H1
const { chars } = text.split("#bouncy-text", {
  chars: { wrap: true }, // Wrap chars for overflow safety
});

// Animate them with bounce effect
animate(chars, {
  translateY: ["100%", "0%"], // Bounce up
  duration: 600,
  easing: "easeOutElastic(1, .5)", // Bouncy easing
  delay: stagger(100), // Stagger per char
  loop: true,
  direction: "alternate", // Bounce back down
  loopDelay: 1000,
});
