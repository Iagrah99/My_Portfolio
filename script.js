const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const heroContent = document.getElementsByClassName("hero-content")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  heroContent.classList.toggle("pushed");
});
