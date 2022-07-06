import { allOurBlogUrl } from "./utils.js";
import { caseStudiesUrl } from "./utils.js";

const fetchOurBlog = async () => {
  try {
    const response = await fetch(allOurBlogUrl);
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchCaseStudies = async () => {
  try {
    const response = await fetch(caseStudiesUrl);
    if (response) {
      return response.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export { fetchOurBlog, fetchCaseStudies };
