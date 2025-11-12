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

    const animatedSections = document.querySelectorAll(
        ".section"
    );
    animatedSections.forEach(sec => {
        sec.classList.add("fade-section");
    });
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });
    }, { threshold: 0.15 });
    animatedSections.forEach(sec => observer.observe(sec));
});


document.addEventListener("DOMContentLoaded", () => {
  const fadeSections = document.querySelectorAll(".fade-section");

  // Alterne gauche/droite automatiquement
  fadeSections.forEach((section, index) => {
    if (index % 2 === 0) {
      section.classList.add("from-left");
    } else {
      section.classList.add("from-right");
    }
  });

  // IntersectionObserver pour déclencher les effets
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 } // visible à 20%
  );

  fadeSections.forEach((section) => observer.observe(section));
});
