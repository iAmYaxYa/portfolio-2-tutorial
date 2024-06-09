const navbarLInks = document.querySelector(".navbar .links");
const toggleMenuBtn = document.querySelector(".navbar .toggle-menu");
const toggleMenuIcon = document.querySelector(".navbar .toggle-menu i");
const navbarLinkItems = document.querySelectorAll(".navbar .links li a");

const toggleLinks = () => {
  navbarLInks.classList.toggle("show");
  toggleMenuIcon.classList.toggle("fa-xmark");
};

toggleMenuBtn.addEventListener("click", toggleLinks);

navbarLinkItems.forEach((link) => {
  link.addEventListener("click", toggleLinks);
});
