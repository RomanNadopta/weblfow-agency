import "../utils/toggleMenu.js";
import "../utils/AOS.js";

import linkFilter from "../filter/studyLinkFilter.js";
import { caseStudyUrl, getElement } from "../utils/utils.js";
import { studies } from "../utils/study.js";

const caseStadiesTitleDOM = getElement(".case-stadies__title");
const caseStadiesTextDOM = getElement(".case-stadies__text");
const SourceImgDOM = getElement(".study-img source");
const studyImgDOM = getElement(".study-img img");
const articleDOM = getElement(".article");

window.addEventListener("DOMContentLoaded", async function () {
  const urlID = window.location.search;
  const newID = urlID.slice(4);
  try {
    const response = await fetch(`${caseStudyUrl}${newID}`);

    if (response.status >= 200 && response.status <= 299) {
      const study = await response.json();
      const { studyCase } = study;

      const {
        category,
        titleDesc,
        firstImg,
        secondImg,
        firstArticleDesc,
        secondArticleDesc,
        firstArticleItemFirst,
        secondArticleItemFirst,
        firstArticleItemSecond,
        secondArticleItemSecond,
        firstArticleItemThird,
        secondArticleItemThird,
        firstArticleItemFourth,
        secondArticleItemFourth,
      } = studyCase;
      document.title = `${
        category[0].toUpperCase() + category.slice(1)
      } | Weblow Agency`;
      caseStadiesTitleDOM.textContent = `Finsweet ${category} case studies`;
      caseStadiesTextDOM.textContent = titleDesc;
      SourceImgDOM.srcset = `${firstImg}.webp`;
      studyImgDOM.src = `${firstImg}.jpg`;

      articleDOM.innerHTML = ` <h3 class="article-title" data-aos="fade-right">About the project</h3>
         <p  data-aos="fade-up">
         ${firstArticleDesc}
         </p>
         <ul class="article-list project-list"  data-aos="fade-up">
         </ul>
      <div class="case-study__image">
      <div class="work-card">
      <div class="work-cards__background-color"  data-aos="flip-right">
      <picture>
      <source
      type="image/webp"
      srcset="${secondImg}.webp"
      />
      <img
      src="${secondImg}.jpg"
      alt="team work"
      />
      </picture>
      </div>
        </div>
        </div>
        <h3 class="article-title"  data-aos="fade-right">How we do it</h3>
        <p  data-aos="fade-up">
        ${secondArticleDesc}
        </p>
        
        <ul class="article-list do-list"  data-aos="fade-up">
        <li class="article-item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </li>
        <li class="article-item">
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea
        </li>
        <li class="article-item">
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        </li>
        <li class="article-item">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa
        </li>
        </ul>`;

      const projectList = getElement(".project-list");
      const doList = getElement(".do-list");
      const firstList = [
        firstArticleItemFirst,
        firstArticleItemSecond,
        firstArticleItemThird,
        firstArticleItemFourth,
      ];
      const secondList = [
        secondArticleItemFirst,
        secondArticleItemSecond,
        secondArticleItemThird,
        secondArticleItemFourth,
      ];
      projectList.innerHTML = firstList
        .map((item) => {
          if (!item) return;
          return ` <li class="article-item">
         ${item}
         </li>`;
        })
        .join("");

      doList.innerHTML = secondList
        .map((item) => {
          if (!item) return;
          return ` <li class="article-item">
         ${item}
         </li>`;
        })
        .join("");
      linkFilter(studies, getElement(".keyword-filter"));
    } else {
      console.log(response.status, response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
});
