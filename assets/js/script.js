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

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
