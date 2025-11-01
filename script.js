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

// --- Form ---
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message envoyé ! Merci de votre contact 😊");
    e.target.reset();
});


