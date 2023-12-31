const loadNews = async () => {
  const url =
    "https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a";
  const res = await fetch(url);
  const data = await res.json();
  showNews(data.data);
};

const showNews = (news) => {
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

  for (const data of news) {
    console.log(data);

    const newsDetailsDiv = document.createElement("div");
    newsDetailsDiv.classList.add(
      "card",
      "text-bg-dark",
      "container",
      "w-75",
      "h-75",
      "p-0",
      "rounded",
      "border-0"
    );
    newsDetailsDiv.innerHTML = `
    
    <img src="${data.image_url}" class="card-img" alt="..." />
    <div class="p-3">
      <h5 class="card-title">${data.title}</h5>
      <div class="d-flex align-items-center">
        <div class="p-3">
          <img
            class="author-img"
            src="${data.author.img}"
            alt=""
          />
        </div>
        <div>
          <div class="fw-bold">${data.author.name}</div>
          <div>${formatDate(data.author.published_date)}</div>
        </div>
      </div>
      <div class="d-flex justify-content-between mt-2">
        <div>
          <i class="fa-regular fa-eye"></i> ${
            news.total_view ? news.total_view : "No Data Found"
          }
        </div>
        <div class="">
          <i class="fa-solid fa-star"></i> ${data.rating.number}
        </div>
      </div>
    </div>

    
    `;
    newsContainer.appendChild(newsDetailsDiv);
  }
};

loadNews();
