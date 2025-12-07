// Hamburger Menu
const ham = document.getElementById('hamburgerBtn');
const nav = document.querySelector('nav');
ham.addEventListener('click', () => { nav.classList.toggle('active'); });

// Lightbox
const lightboxLinks = document.querySelectorAll('.lightbox');
const popup = document.getElementById('lightboxPopup');
const popupImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeLightbox');

lightboxLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
    popupImg.src = link.href;
  });
});

closeBtn?.addEventListener('click', () => {
  popup.style.display = 'none';
});


// THEME SWITCHER
const themeSelect = document.getElementById("themeSelect");

  console.log("themeSelect ", themeSelect);

// Load Saved Theme
const savedTheme = localStorage.getItem("theme");
console.log(savedTheme)
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeSelect.value = savedTheme;
}

// Change Theme on Select
themeSelect.addEventListener("change", () => {
  const theme = themeSelect.value;
  console.log("theme ", theme);
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});

// THEME ICON TOGGLE BUTTON
const themeToggle = document.getElementById("themeToggle");

// When button clicked → toggle between light & dark
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const nextTheme = current === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
});

// Load correct icon according to saved theme on page load
if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}
