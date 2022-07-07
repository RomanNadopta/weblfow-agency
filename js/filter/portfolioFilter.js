import { getElement } from "../utils/utils.js";

const button = getElement(".work-categories__list");

button.addEventListener("click", (event) => {
  const filter = document.querySelectorAll(".work-cards__item");
  if (event.target.tagName !== "SPAN") return false;
  let filterClass = event.target.dataset["filter"];

  filter.forEach((elem) => {
    if (!elem.classList.contains(filterClass) && filterClass !== "all") {
      elem.classList.add("work-card--hide");
      // const animation = () => {
      //   AOS.init({
      //     delay: 200, // values from 0 to 3000, with step 50ms
      //     duration: 1500, // values from 0 to 3000, with step 50ms
      //     once: false, // whether animation should happen only once - while scrolling down
      //     mirror: false, // whether elements should animate out while scrolling past them
      //     anchorPlacement: "top-bottom", // de
      //   });

      //   clearInterval(timerAnimation);
      // };
      // let timerAnimation = setInterval(animation, 200, AOS);
    } else {
      elem.classList.remove("work-card--hide");
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
    }
  });
});
