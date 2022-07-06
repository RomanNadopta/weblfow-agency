// ****** faq *******

import { getElement } from "./utils.js";

if (document.querySelector(".faq")) {
  let faqQuestionItem = document.querySelectorAll(".question-item__wrapper");

  faqQuestionItem.forEach(function (e) {
    e.addEventListener("click", function () {
      if (e.classList.contains("faq-question--closed")) {
        e.classList.remove("faq-question--closed");
        e.classList.add("faq-question--opened");
      } else {
        e.classList.add("faq-question--closed");
        e.classList.remove("faq-question--opened");
      }
    });
  });
}

//  smooth scroll
const navbar = getElement(".navbar");
const scrollLink = getElement(".scroll-link");
const linksContainer = getElement(".main-nav__list");
const mainNav = getElement(".main-nav");

scrollLink.addEventListener("click", (e) => {
  e.preventDefault();
  const id = e.currentTarget.getAttribute("href").slice(1);
  const element = document.getElementById(id);
  const navHeight = navbar.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const fixedNav = navbar.classList.contains("fixed-nav");

  let position = element.offsetTop - navHeight;
  if (!fixedNav) {
    position = position - navHeight;
  }
  if (navHeight > 50) {
    position = position + containerHeight;
  }
  window.scrollTo({
    left: 0,
    top: position,
  });
  linksContainer.style.height = 0;
  if (mainNav.classList.contains("main-nav--opened")) {
    mainNav.classList.remove("main-nav--opened");
  }
});
