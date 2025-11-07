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


// Désactive le smooth au chargement
document.documentElement.style.scrollBehavior = "auto";

window.addEventListener("load", () => {
  setTimeout(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, 100);
});
