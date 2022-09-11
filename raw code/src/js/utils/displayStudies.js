const display = (studies, element) => {
  element.innerHTML = studies
    .map((study) => {
      const { id, projectTitle, projectContent, view, selector, firstImg } =
        study;
      return `
    <li class="work-cards__item ${selector}">
             <div class=" work-cards__background-color">
               <picture>
                 <source type="image/webp" srcset="${firstImg}.webp">
                 <img src="${firstImg}.jpg" alt="${projectTitle}">
               </picture>
             </div>
             <h3 class="project__title">${projectTitle}</h3>
             <p class="project-content">${projectContent}</p>
             <a class="view-link view-portfolio" href="case-study.html?id=${id}">${view}
               <svg width="25" height="12" class="arrow-right">
                 <use xlink:href="#arrow-right-icon"></use>
               </svg>
             </a>
           </li>`;
    })
    .join("");
};

export default display;
