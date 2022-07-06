const display = (blogs, element) => {
  element.innerHTML = blogs
    .map((blog) => {
      const { id, data, img, title, alt, description } = blog;
      return `<li class="our-blog__item" data-aos="zoom-in-up">
    <div class="our-blog__image">
      <picture>
        <source type="image/webp" srcset="${img}.webp">
        <img src="${img}.jpg"" alt="${alt}">
      </picture>
    </div>
    <p class="blog-publish__date">${data}</p>
    <h6 class="blog-publish__title">${title}</h6>
    <p class="blog-publish__text">${description}</p>
    <div class="blog-view__wrapper">
      <a class="view-link view-link__more" href="read-blog.html?id=${id}">Read More
        <svg width="25" height="12" class="arrow-right">
          <use xlink:href="#arrow-right-icon"></use>
        </svg>
      </a>
    </div>
  </li>`;
    })
    .join("");
};

export default display;
