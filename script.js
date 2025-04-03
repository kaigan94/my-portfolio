/* ========================
   🌐 Smooth Scroll Links
=========================== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* ========================
   ☀️🌙 Theme Toggle Setup
=========================== */
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

/* ========================
   🧠 Load Saved Theme
=========================== */
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light-mode");
  themeIcon.textContent = "🌞"; // Sun icon
}

/* ========================
   🔁 Theme Toggle Handler
=========================== */
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  const isLight = body.classList.contains("light-mode");

  // Switch icon
  themeIcon.textContent = isLight ? "🌞" : "🌙";

  // Save preference to localStorage
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ========================
   🔼 Scroll to Top Button
=========================== */
const scrollBtn = document.getElementById("scrollToTop");

scrollBtn.addEventListener("click", () => {
  // Add teleport animation class
  scrollBtn.classList.add("teleporting");

  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Remove the class after animation is done
  setTimeout(() => {
    scrollBtn.classList.remove("teleporting");
  }, 600); // Match animation duration
});

/* ========================
   👀 Show Scroll Button on Scroll
=========================== */
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});
