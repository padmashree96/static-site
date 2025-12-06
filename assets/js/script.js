console.log("Website Loaded Successfully");

function openLightbox(url, caption) {
  document.getElementById("lightboxModal").style.display = "block";
  document.getElementById("lightboxImage").src = url;
  document.getElementById("lightboxCaption").innerText = caption;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".close").onclick = () => {
    document.getElementById("lightboxModal").style.display = "none";
  };

  document.getElementById("lightboxModal").onclick = (e) => {
    if (e.target === e.currentTarget) {
      e.currentTarget.style.display = "none";
    }
  };
});
