// Smooth scroll for navigation links
document.querySelectorAll(".navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Interactive hover effect for gallery images
const galleryImages = document.querySelectorAll(".gallery-images img");

galleryImages.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.border = "3px solid #ffd700";
  });

  img.addEventListener("mouseleave", () => {
    img.style.border = "none";
  });
});
