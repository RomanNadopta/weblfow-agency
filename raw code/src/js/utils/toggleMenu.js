import { getElement } from "./utils.js";

// *********** close scroll *********
const mainNav = getElement(".main-nav");
const navToggle = getElement(".menu-bars");
const mainNavlist = getElement(".main-nav__list");
const links = getElement(".site-list");

navToggle.addEventListener("click", () => {
  const containerHeight = mainNavlist.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    mainNavlist.style.height = `${linksHeight}px`;
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNavlist.style.height = 0;
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
});

//********* fixed navbar **************

const navbar = getElement(".navbar");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  // const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > 0) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});
