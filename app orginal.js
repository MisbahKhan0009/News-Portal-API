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

    <button type="button" id = "news-details" onclick = "loadAllNewsByCatagory(${category.category_id})" class="btn btn-outline-secondary m-2">${category.category_name}</button>

    `;
    categoryContainer.appendChild(categoryDiv);
  }
};

const loadAllNewsByCatagory = async (categoryId) => {
  const url = `https://openapi.programming-hero.com/api/news/categories/${categoryId}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.data.author.name);
};

const showNews = (categoryIds) => {
  const newsContainer = document.getElementById("news-container");
  

  for (const news of categoryIds) {
    console.log("hi");
    const newsDiv = document.createElement("div");
    newsDiv.classList.add("card");
    newsDiv.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
      <img src="" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
    `;
    newsContainer.appendChild(newsDiv);
  }
};

loadcategories();
loadAllNewsByCatagory("");



