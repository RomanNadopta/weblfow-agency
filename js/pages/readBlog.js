import "../utils/toggleMenu.js";


import { singleBlogUrl, getElement } from "../utils/utils.js";

const blogTitleDOM = getElement(".blog-title");
const blogAuthorDOM = getElement(".blog__author-name");
const blogDateDOM = getElement(".blog__date");
const sourceImgDOM = getElement(".source-img");
const singleBlogImgDOM = getElement(".single-blog__img");
const pageReadBlogDOM = getElement(".page-read__blog");

window.addEventListener("DOMContentLoaded", async function () {
  const urlID = window.location.search;
  let newID = urlID.slice(4);
  try {
    const response = await fetch(`${singleBlogUrl}${newID}`);
    if (response.status >= 200 && response.status <= 299) {
      const blog = await response.json();
      const { fields, readBlog } = blog;
      const { author, data, alt, blogTitle } = fields;
      const image = fields.image[0].desktop;
      const {
        firstTitle,
        secondTitle,
        thirdTitle,
        firstDesc,
        secondDesc,
        firstListItem,
        secondListItem,
        thirdListItem,
        thirdDesc,
        image: img,
        alt: secondAlt,
      } = readBlog;
      document.title = `${blogTitle} | Weblow Agency`;
      blogTitleDOM.textContent = blogTitle;
      blogAuthorDOM.textContent = author;
      blogDateDOM.textContent = data;
      sourceImgDOM.srcset = `${image}.webp`;
      singleBlogImgDOM.src = `${image}.jpg`;
      singleBlogImgDOM.alt = alt;

      pageReadBlogDOM.innerHTML = `
      <article class="read-blog" data-aos="fade-up">
        <h3 class="read-blog__title">
         ${firstTitle}
        </h3>
        <p class="read-blog__text">
          ${firstDesc}
        </p>
      </article>

      <article class="read-blog" data-aos="fade-up">
        <h3 class="read-blog__title">${secondTitle}</h3>
        <p class="read-blog__text">
        ${secondDesc}
        </p>
        <ul class="article-list read-blog__list"></ul>
        <p class="read-blog__text">
       ${thirdDesc}
        </p>
        <picture>
          <source
            type="image/webp"
            srcset="${img}.webp"
          />
          <img
            src="${img}.jpg"
            alt="${secondAlt}"
          />
        </picture>
      </article>

      <article class="read-blog" data-aos="fade-up">
        <h3 class="read-blog__title">
          ${thirdTitle}
        </h3>
        <p class="read-blog__text">
         ${thirdDesc}
        </p>
      </article> 
      `;
      const readBlogList = getElement(".read-blog__list");
      const list = [firstListItem, secondListItem, thirdListItem];

      readBlogList.innerHTML = list
        .map((item) => {
          if (!item) return;
          return `<li class="article-item read-blog__item">
        ${item}
      </li>`;
        })
        .join("");
    } else {
      console.log(response.status, response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
  const animation = () => {
    AOS.init({
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // de
    });

    clearInterval(timerAnimation);
  };
  let timerAnimation = setInterval(animation, 200, AOS);
});
