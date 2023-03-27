const BASE_API =
  "https://newsapi.org/v2/top-headlines?apiKey=b27b31310e6a47b486822a8b78ccf379&country=us";

const getNewsHTML = (img, title, caption) => {
  return `
    <section class="news">
      <figure class="news__img">
        <img
          src=${img}
          alt=""
        />
      </figure>
      <div class="news__content">
        <h2 class="news__title">${title}</h2>
        <p class="news__caption">${caption}</p>
      </div>
      </section>
      `;
};

const fetchNews = (endpoint) => {
  const main = document.querySelector("main");
  var req = new Request(BASE_API + endpoint);
  console.log(BASE_API + endpoint);
  fetch(req)
    .then((res) => res.json())
    .then(({ articles }) => {
      main.innerHTML = "";
      articles.map((article) => {
        main.innerHTML += getNewsHTML(
          article.urlToImage,
          article.title,
          article.description
        );
      });
    });
};

fetchNews("&sources=bbc-news");
