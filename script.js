const toggle = document.getElementById("darkModeToggle");

document.body.classList.remove("light-mode");

toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
});


document.documentElement.style.scrollBehavior = "auto";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, 100);
});


document.addEventListener("DOMContentLoaded", () => {

  // Sélectionne toutes les sections à animer
  const sections = document.querySelectorAll(".section");

  // Ajoute les classes de base et alterne les directions
  sections.forEach((section, index) => {
    section.classList.add("fade-section");
    if (index % 2 === 0) {
      section.classList.add("from-left");
    } else {
      section.classList.add("from-right");
    }
  });

  // Crée un seul IntersectionObserver
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 } // Déclenche quand 20% est visible
  );

  // Observe chaque section
  sections.forEach((section) => observer.observe(section));
});



