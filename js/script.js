const roles = ["Software Engineer", "Problem Solver", "Data Enthusiast", "Tech Lover"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
  const el = document.getElementById('dynamic-text');
  if (charIndex < roles[roleIndex].length) {
    el.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(deleteRole, 1500);
  }
}

function deleteRole() {
  const el = document.getElementById('dynamic-text');
  if (charIndex > 0) {
    el.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteRole, 80);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);
