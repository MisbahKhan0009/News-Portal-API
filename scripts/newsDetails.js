// Function to get the news ID and trigger the loadNews function

// Function to load news based on the provided news ID
const loadNews = async (news_id) => {
  const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
  const res = await fetch(url);
  const data = await res.json();
  showNews(data.data);
};

const showNews = (news) => {
  const newsContainer = document.getElementById("news-container");
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

  for (const data of news) {
    console.log(data);

    const newsDetailsDiv = document.createElement("div");
    newsDetailsDiv.classList.add("card", "w-75", "container", "p-0");
    newsDetailsDiv.innerHTML = `
    
  <div class = "text-bg-dark container w-100 m-0 p-0 rounded border-0">
  <img src="${data.image_url}" class="card-img" alt="..." />
  <div class="p-5">
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
          data.total_view ? data.total_view : "No Data Found"
        }
      </div>
      <div class="">
        <i class="fa-solid fa-star"></i> ${data.rating.number}
      </div>
    </div>
  </div>
  </div>
    <div class="article-first card-body container ps-0 pt-5 w-75">
    ${data.details}
   </div>

    
    `;
    newsContainer.appendChild(newsDetailsDiv);
  }
};

// function getNewsId(button, newsId) {
//   button.preventDefault();
// }
// loadNews();
