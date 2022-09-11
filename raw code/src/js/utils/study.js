import { getStorageItem, setStorageItem } from "./utils.js";

let studies = getStorageItem("studies");
const setupStudies = (items) => {
  studies = items.map((study) => {
    const {
      id,
      fields: { projectTitle, projectContent, view, class: selector },
      studyCase: { firstImg, category },
    } = study;
    return {
      id,
      projectTitle,
      projectContent,
      view,
      selector,
      firstImg,
      category,
    };
  });
  setStorageItem("studies", studies);
};

export { studies, setupStudies };
