import "./utils/toggleMenu.js";
import "./utils/faq.js";
import "./utils/sendInquiryForm.js";
import "./utils/AOS.js";

import { getElement } from "./utils/utils.js";
import { fetchOurBlog } from "./utils/fetch.js";
import { setupBlogs, blogs } from "./utils/blog.js";
import display from "./utils/displayBlogs.js";

const init = async () => {
  const products = await fetchOurBlog();
  if (products) {
    setupBlogs(products);
    const featured = blogs.filter((blog) => blog.featured === true);
    display(featured, getElement(".our-blog__list"));
  }
};

window.addEventListener("DOMContentLoaded", init);

function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});

// ********** review **************

if (document.querySelector(".review")) {
  new Swiper(".review-slider", {
    direction: "horizontal",
    loop: false,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: "auto",
    spaceBetween: 20,

    speed: 500,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
