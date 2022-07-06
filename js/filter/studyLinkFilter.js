const linkFilter = (studies, element) => {
  element.innerHTML = studies
    .map((link) => {
      const { id, category } = link;
      return ` <a href="case-study.html?id=${id}" class="keyword-button"
   >${category}</a
 >`;
    })
    .join("");
};

export default linkFilter;
