const loadCategories = async () => {
  const url = "https://openapi.programming-hero.com/api/news/categories";
  const res = await fetch(url);
  const data = await res.json();
  showCategories(data.data.news_category);
};

const showCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");

  categoryContainer.innerHTML = ``;

  for (const category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `

    <button type="button" id="news-details" class="btn btn-outline-secondary this-category m-2" onclick="getCategoryId(this, '${category.category_id}')">
    ${category.category_name}
</button>



    `;
    categoryContainer.appendChild(categoryDiv);
  }
};

function getCategoryId(button, categoryId) {
  const allButtons = document.querySelectorAll(".this-category");
  allButtons.forEach((btn) => btn.classList.remove("active"));

  button.classList.add("active");

  loadNewsDetails(categoryId);
}

loadCategories();
