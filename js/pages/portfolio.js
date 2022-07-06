import "../utils/toggleMenu.js";
import "../filter/portfolioFilter.js";
// import "../utils/AOS.js";

import { studies, setupStudies } from "../utils/study.js";
import display from "../utils/displayStudies.js";
import { getElement } from "../utils/utils.js";
import { fetchCaseStudies } from "../utils/fetch.js";

const init = async () => {
  const products = await fetchCaseStudies();
  if (products) {
    setupStudies(products);
    display(studies, getElement(".work-cards__list"));
  }
  const animation = () => {
    AOS.init({
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // de
    });

    clearInterval(timerAnimation);
  };
  let timerAnimation = setInterval(animation, 200, AOS);
};

window.addEventListener("DOMContentLoaded", init);
