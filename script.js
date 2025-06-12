// Typing effect
const texts = ["AI/ML Enthusiast", "Web Developer", "Tech Enthusiast", "Creative Technologist", "UI UX Designer", "User-Centered Developer"];
let index = 0, char = 0, isDeleting = false;
const typedElem = document.getElementById('typed-text');
function type() {
  const current = texts[index];
  typedElem.textContent = current.substring(0, char);
  if (!isDeleting) { char++; if (char > current.length) { isDeleting = true; setTimeout(type, 1000); return; } }
  else { char--; if (char === 0) { isDeleting = false; index = (index + 1) % texts.length; } }
  setTimeout(type, isDeleting ? 50 : 100);
}
document.addEventListener('DOMContentLoaded', type);

// Scroll reveal
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
sections.forEach(sec => { sec.style.opacity = '0'; sec.style.transform = 'translateY(20px)'; observer.observe(sec); });

// Menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');
toggleBtn.addEventListener('click', () => nav.classList.toggle('active'));

//toggle button
const toggleSwitch = document.getElementById("toggleSwitch");
const video = document.getElementById("bgVideo");

// ✅ Set correct video based on theme on load
function updateThemeVideo() {
  const isLight = document.body.classList.contains("light");
  video.querySelector("source").src = isLight ? "video/your-video-light.mp4" : "video/your-video.mp4";
  video.load();
}

// ✅ Run once on page load
updateThemeVideo();

// ✅ Theme toggle listener
toggleSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light");
  updateThemeVideo();
});

