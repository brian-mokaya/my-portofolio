function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const techStacks = [
  "Backend Developer",
  "Database Designer",
  "UI/UX Designer",
  "API Developer",
  "Full-Stack Developer",
  "Frontend Developer"
];

let currentIndex = 0;

function rotateTechStacks() {
  const techStackElement = document.getElementById("tech-stack");

  // Add fade-out animation
  techStackElement.classList.add("fade-out");

  // Wait for the fade-out animation to complete, then update the text
  setTimeout(() => {
    techStackElement.textContent = techStacks[currentIndex];
    currentIndex = (currentIndex + 1) % techStacks.length;

    // Add fade-in animation after updating the text
    techStackElement.classList.remove("fade-out");
    techStackElement.classList.add("fade-in");
  }, 1250); // Half of the rotation time (2.5s / 2)

  // Remove fade-in class after the animation completes
  setTimeout(() => {
    techStackElement.classList.remove("fade-in");
  }, 2500); // Match the total rotation time
}

// Rotate every 2.5 seconds
setInterval(rotateTechStacks, 2500);
