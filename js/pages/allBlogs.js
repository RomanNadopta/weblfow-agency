import "../utils/toggleMenu.js";
import "../utils/AOS.js";

import { blogs } from "../utils/blog.js";
import display from "../utils/displayBlogs.js";
import { getElement } from "../utils/utils.js";

const mainBlogURL =
  "https://romannadopta.github.io/json-for-weblow-agency/single-mainBlog";

const blogHeader = getElement(".blog-header");
window.addEventListener("DOMContentLoaded", async function () {
  try {
    const response = await fetch(mainBlogURL);
    if (response) {
      const mainBlog = await response.json();
      const { id, fields } = mainBlog;
      const { author, data, alt, blogTitle, description } = fields;
      const image = fields.image[0].desktop;
      blogHeader.innerHTML = ` <h2 class="blog-title">
      ${blogTitle}
    </h2>
    <div class="blog-date__author-name">
      <p class="label blog__author-name">${author}</p>
      <p class="label blog__date">Posted on ${data}</p>
    </div>
    <div class="blog-header__image">
      <picture>
        <source
          type="image/webp"
          srcset="${image}.webp"
        />
        <img
          src="${image}.jpg"
          alt="${alt}"
        />
      </picture>
    </div>
    <p class="blog-header__text">
      ${description}
    </p>
    <a class="blog-header__link" href="read-blog.html?id=${id}">Read more</a>`;
    }
  } catch (error) {
    console.log(error);
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

});


display(blogs, getElement(".our-blog__list"));

