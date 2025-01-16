// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach(slide => (slide.style.display = "none"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Collapsible content functionality
document.querySelector(".toggle-button").addEventListener("click", function () {
  let content = document.querySelector(".collapsible-content");
  content.style.display = content.style.display === "block" ? "none" : "block";
});
