const loadNewsDetails = async (category_id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  const res = await fetch(url);
  const data = await res.json();

  showNewsDetails(data.data, data.status);
};

const showNewsDetails = (allNews, status) => {
  const newsContainer = document.getElementById("all-news");

  newsContainer.innerHTML = ``;

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

  if (status === false) {
    const noNews = document.getElementById("no-news");
    noNews.classList.remove("d-none");
  }

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
        <h5 class="card-title pt-3">${news.title}</h5>
        <p class="card-text">${
          news.details.length > 500
            ? `${news.details.slice(0, 500)}...`
            : news.details
        }</p>

        <div class="d-flex justify-content-between align-items-center pb-2">
          <div class="d-flex align-items-center">
            <div class=" p-3"><img class ="author-img" src="${
              news.author.img
            }" alt=""></div>
            <div>
              <div class = "fw-bold">${news.author.name}</div>
              <div>${formatDate(news.author.published_date)}</div>
            </div>
          </div>
          <div><i class="fa-regular fa-eye"></i> ${
            news.total_view ? news.total_view : "No Data Found"
          }</div>
          <div>
          <div class = "text-center"><i class="fa-solid fa-star"></i> ${
            news.rating.number
          }</div>
          <div class = "fw-bold text-center">${news.rating.badge}</div>
          </div>
          <div onclick="getNewsId(this, '${
            news._id
          }') "
          > <a href="news.html" class = "text-dark pe-3 fs-3"><i class="fa-solid fa-arrow-right"></i></a></div>
        </div>
      </div>
    </div>
  </div>
    `;
    newsContainer.appendChild(newsDiv);
  }
};
