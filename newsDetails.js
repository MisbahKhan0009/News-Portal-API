const loadNewsDetails = async () => {
  const url = "https://openapi.programming-hero.com/api/news/category/01";
  const res = await fetch(url);
  const data = await res.json();
  showNewsDetails(data.data);
};

const showNewsDetails = (allNews) => {
  const newsContainer = document.getElementById("news-container");

  // date converter starts
  function formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  }

  // date converter ends

  for (const news of allNews) {
    const newsDiv = document.createElement("div");
    console.log(news);
    newsDiv.classList.add("card", "m-3", "w-75");
    newsDiv.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${news.thumbnail_url}"
        class="img-fluid rounded-5 p-3"
        alt="..."
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details}</p>
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <div class=" p-3"><img class ="author-img" src="${
              news.author.img
            }" alt=""></div>
            <div>
              <div class = "fw-bold">${news.author.name}</div>
              <div>${formatDate(news.author.published_date)}</div>
            </div>
          </div>
          <div>b</div>
          <div>c</div>
          <div class = "text-primary fs-3"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsContainer.appendChild(newsDiv);
  }
};

loadNewsDetails();
