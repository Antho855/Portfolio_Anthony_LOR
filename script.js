// --- Mode sombre ---
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// --- Formulaire ---
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message envoyé ! Merci de votre contact 😊");
    e.target.reset();
});

// === Scroll Spy avec IntersectionObserver ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

// Crée un observateur
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const navLink = document.querySelector(`.navbar a[href="#${id}"]`);

    if (entry.isIntersecting) {
      // Supprime l'état actif sur tous les liens
      navLinks.forEach((link) => link.classList.remove("active"));
      // Active le lien correspondant à la section visible
      navLink.classList.add("active");
    }
  });
}, {
  threshold: 0.5 // déclenche quand 50% de la section est visible
});

// Observe toutes les sections
sections.forEach((section) => observer.observe(section));
