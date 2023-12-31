const loadcategories = async () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  const res = await fetch(url);
  const data = await res.json();
  showCategories(data.data.news_category);
};

const showCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");

  for (const category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `

    <button type="button" id="news-details" class="btn btn-outline-secondary m-2">
    ${category.category_name}
  </button>

    `;
    categoryContainer.appendChild(categoryDiv);
  }
};
loadcategories();
