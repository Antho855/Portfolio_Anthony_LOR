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
  const sections = document.querySelectorAll(".section");

  // Ajoute la classe fade-section à toutes les sections
  sections.forEach(sec => sec.classList.add("fade-section"));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  // Observe chaque section
  sections.forEach(sec => observer.observe(sec));
});

// Gestion du bonton pour remonter
const backToTop = document.getElementById("backToTop");

// Affiche le bouton après 300px de scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

// Remonte en haut de la page
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
