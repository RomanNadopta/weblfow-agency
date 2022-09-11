const allOurBlogUrl =
  "https://romannadopta.github.io/json-for-weblow-agency/ourblog";

const singleBlogUrl =
  "https://romannadopta.github.io/json-for-weblow-agency/single-";

const caseStudiesUrl =
  "https://romannadopta.github.io/json-for-weblow-agency/case-studies";

const caseStudyUrl = "https://romannadopta.github.io/json-for-weblow-agency/";

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check ${selection} selector, such element doesn't exist `
  );
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allOurBlogUrl,
  singleBlogUrl,
  caseStudiesUrl,
  caseStudyUrl,
  getElement,
  getStorageItem,
  setStorageItem,
};
