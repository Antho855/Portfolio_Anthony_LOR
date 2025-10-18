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
