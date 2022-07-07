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

// const caseStudyWrapper = document.querySelector(".case-study__wrapper");
// const keywordFilter = document.querySelector(".keyword-filter");

// window.addEventListener("DOMContentLoaded", () => {
//   displayStudyItems(caseStudies);
//   // displayKeywordBtns();
// });

// function displayStudyItems(studyItems) {
//   let displayStudy = studyItems.map((item) => {
//     return `<div class="work-cards__item content " id="${item.category}">
//           <p class="label">Web design and development</p>
//           <h2 class="case-stadies__title">Finsweet ${item.category} case studies</h2>
//           <p class="case-stadies__text">${item.titleDesc}</p>
//           <div class=" work-cards__background-color">
//             <picture>
//               <source type="image/webp" srcset="">
//               <img src="" alt="template-1">
//             </picture>
//           </div>
//           <ul class="information-list">
//             <li class="information-item">
//               <p class="label">Client</p>
//               <h6 class="information-title">facebook.com</h6>
//             </li>
//             <li class="information-item">
//               <p class="label">Service</p>
//               <h6 class="information-title">Product Design</h6>
//             </li>
//             <li class="information-item">
//               <p class="label">Deliverable</p>
//               <h6 class="information-title">UI Screens, UX Flow & Prototype</h6>
//             </li>
//           </ul>

//           <div class="article">
//             <h3 class="article-title">About the project</h3>
//             <p>${item.firstArticleDesc}</p>
//             <ul class="article-list">
//               <li class="article-item">${item.firstArticleItemFirst}</li>
//               <li class="article-item">${item.firstArticleItemSecond}</li>
//               <li class="article-item">${item.firstArticleItemThird}</li>
//               <li class="article-item">${item.firstArticleItemFourth}</li>
//             </ul>
//             <div class="case-study__image">
//               <div class="work-card">
//                 <div class="work-cards__background-color">
//                   <picture>
//                     <source type="image/webp" srcset="${item.secondImg}.webp">
//                     <img src="${item.secondImg}.jpg" alt="team work">
//                   </picture>
//                 </div>
//               </div>
//             </div>

//             <h3 class="article-title">How we do it</h3>
//             <p>${item.secondArticleDesc}</p>

//             <ul class="article-list">
//               <li class="article-item">${item.secondArticleItemFirst}</li>
//               <li class="article-item">${item.secondArticleItemSecond}</li>
//               <li class="article-item">${item.secondArticleItemThird}</li>
//               <li class="article-item">${item.secondArticleItemFourth}</li>
//             </ul>
//           </div>
//         </div>`;
//   });
//   displayStudy = displayStudy.join("");
//   caseStudyWrapper.innerHTML = displayStudy;
//   caseStudyWrapper.firstChild.className = "work-cards__item content active";
// }

// const categories = caseStudies.reduce((values, item) => {
//   if (!values.includes(item.category)) {
//     values.push(item.category);
//   }
//   return values;
// }, []);
// const categoryBtns = categories
//   .map((category) => {
//     return `<a class="keyword-button" href="#${category}" data-id="${category}">${category}</a>`;
//   })
//   .join("");
// keywordFilter.innerHTML = categoryBtns;
// keywordFilter.firstChild.className = "keyword-button active";

// filter

// const filterBtns = keywordFilter.querySelectorAll(".keyword-button");
// const keywords = document.querySelector(".keywords");

// keywords.addEventListener("click", (e) => {
//   const id = e.target.dataset.id;
//   const articles = document.querySelectorAll(".content");
//   if (id) {
//     filterBtns.forEach((btn) => {
//       btn.classList.remove("active");
//       e.target.classList.add("active");
//     });
//     articles.forEach((article) => {
//       article.classList.remove("active");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// });

// filterBtns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const category = e.currentTarget.dataset.id;
//     const studyCategory = caseStudies.filter((studyItem) => {
//       if (studyItem.category === category) {
//         return studyItem;
//       }
//     });
//     displayStudyItems(studyCategory);
//   });
// });
