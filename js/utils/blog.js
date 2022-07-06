import { getStorageItem, setStorageItem } from "./utils.js";

let blogs = getStorageItem("blogs");
const setupBlogs = (items) => {
  blogs = items.map((blog) => {
    const {
      id,
      fields: { featured, data, image: img, title, alt, description },
    } = blog;
    return { id, featured, data, img, title, alt, description };
  });
  setStorageItem("blogs", blogs);
};

export { blogs, setupBlogs };
