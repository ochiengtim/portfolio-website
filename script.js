// Dynamic Typing Effect
const roles = ["Software Engineer", "Problem Solver", "Data Enthusiast", "Tech Lover"];
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
    const textElement = document.getElementById('dynamic-text');
    if (charIndex < roles[roleIndex].length) {
        textElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(deleteRole, 2000);
    }
}

function deleteRole() {
    const textElement = document.getElementById('dynamic-text');
    if (charIndex > 0) {
        textElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteRole, 100);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

document.addEventListener('DOMContentLoaded', typeRole);