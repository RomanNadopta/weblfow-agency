import { getElement } from "../utils/utils.js";

const button = getElement(".work-categories__list");

button.addEventListener("click", (event) => {
  const filter = document.querySelectorAll(".work-cards__item");
  if (event.target.tagName !== "SPAN") return false;
  let filterClass = event.target.dataset["filter"];

  filter.forEach((elem) => {
    if (!elem.classList.contains(filterClass) && filterClass !== "all") {
      elem.classList.add("work-card--hide");
    } else {
      elem.classList.remove("work-card--hide");
    }
  });
});
