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

// Scroll spy + click-priority

const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
const sections = document.querySelectorAll('section[id]');

let ignoreObserverUntil = 0;
const IGNORE_MS = 800;

// Click handler : smooth scroll + set ignore flag
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    const header = document.querySelector('header');
    const navbarHeight = header ? header.offsetHeight : 0;
    const top = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

    // set the ignore flag so observer won't override the active link
    ignoreObserverUntil = Date.now() + IGNORE_MS;

    // scroll smoothly to target
    window.scrollTo({
      top,
      behavior: 'smooth'
    });

    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// IntersectionObserver : updates active link when user scrolls normally
const observerOptions = {
  threshold: 0.5 // section considered visible when 50% is in viewport
};

const observer = new IntersectionObserver((entries) => {
  // if we recently clicked, ignore observer entries
  if (Date.now() < ignoreObserverUntil) return;

  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const navLink = document.querySelector(`.navbar a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      if (navLink) navLink.classList.add('active');
    }
  });
}, observerOptions);

// observe all sections
sections.forEach(section => observer.observe(section));
