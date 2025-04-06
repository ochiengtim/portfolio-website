// Enhanced Dynamic Typing Effect with Cursor
const roles = [
  "Software Engineer",
  "Problem Solver",
  "Data Enthusiast",
  "Tech Lover"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("dynamic-text");

function typeEffect() {
  const currentRole = roles[roleIndex];
  const visibleText = isDeleting
    ? currentRole.substring(0, charIndex--)
    : currentRole.substring(0, charIndex++);

  textElement.textContent = visibleText;

  let typingSpeed = isDeleting ? 70 : 120;
  typingSpeed -= Math.random() * 20; // add natural variation

  if (!isDeleting && charIndex === currentRole.length + 1) {
    typingSpeed = 2000; // Pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
