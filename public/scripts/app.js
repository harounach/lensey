window.addEventListener("DOMContentLoaded", () => {
  /* Types definition */

  /**
   * Article
   * @typedef {Object} Article
   *
   * @property {Source} source
   * @property {string} author
   * @property {string} title
   * @property {string} description
   * @property {string} url
   * @property {string} urlToImage
   * @property {string} publishedAt
   * @property {string} content
   */

  /**
   * Source
   * @typedef {Object} Source
   *
   * @property {string} id
   * @property {string} name
   */

  /* Model */
  const model = {
    defaultCategory: "general",
    getArticlesData: async function (category) {
      return axios.get("/news", {
        params: {
          category: category,
        },
      });
    },
  };

  /* Controller */
  const controller = {
    init: function () {
      view.init();
      this.getData(model.defaultCategory);
    },
    getData: function (category) {
      model
        .getArticlesData(category)
        .then((articles) => {
          // render view with new data
          view.render(articles.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  };

  /* View */
  const view = {
    init: function () {
      this.featuredArticles = document.querySelector(".featured-articles");
      this.articles = document.querySelector(".articles");
    },

    /**
     * Render articles
     *
     * @param {Array<Article>} articlesData - Articles Array
     */
    render: function (articlesData) {
      console.log(articlesData);
      const featuredArticles = articlesData.slice(0, 3);
      const allArticles = articlesData.slice(3);

      this.populateFeaturedArticles(featuredArticles);
      this.populateAllArticles(allArticles);
    },

    /**
     * Populate featured articles
     * @param {Array<Article>} featuredArticlesData
     */
    populateFeaturedArticles: function (featuredArticlesData) {
      console.log(featuredArticlesData);
      featuredArticlesData.forEach((articleData) => {
        this.createFeaturedArticle(articleData);
      });
    },

    /**
     * Populate all articles
     *
     * @param {Array<Article>} articlesData
     */
    populateAllArticles: function (articlesData) {
      console.log(articlesData);
      articlesData.forEach((articleData) => {
        this.createArticle(articleData);
      });
    },

    /**
     * Create article element and insert to the page
     *
     * @param {Article} featuredArticleData
     */
    createFeaturedArticle: function (featuredArticleData) {
      // Create featured article
      const featuredArticleCard = document.createElement("a");
      featuredArticleCard.classList.add("featured");
      featuredArticleCard.href = featuredArticleData.url;

      // Create image wrapper
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("featured__img-wrapper");

      // Create article image
      const articleImage = document.createElement("img");
      articleImage.classList.add("featured__img");
      articleImage.src = featuredArticleData.urlToImage;
      articleImage.alt = featuredArticleData.title;

      // Create text wrapper
      const textWrapper = document.createElement("div");
      textWrapper.classList.add("featured__text");

      // Create article title
      const articleTitle = document.createElement("p");
      articleTitle.classList.add("featured__title");
      articleTitle.textContent = featuredArticleData.title;

      // Create article date
      const articleDate = document.createElement("span");
      articleDate.classList.add("featured__publishedAt");
      articleDate.textContent = featuredArticleData.publishedAt;

      // Create featured artcile tag
      const tag = document.createElement("span");
      tag.classList.add("featured__tag");
      tag.textContent = "Featured";

      // Append articleImage to imageWrapper
      imageWrapper.appendChild(articleImage);

      // Append imageWrapper to featuredArticleCard
      featuredArticleCard.appendChild(imageWrapper);

      // Append articleTitle to textWrapper
      textWrapper.appendChild(articleTitle);

      // Append articleDate to textWrapper
      textWrapper.appendChild(articleDate);

      // Append textWrapper to featuredArticleCard
      featuredArticleCard.appendChild(textWrapper);

      // Append tag to featuredArticleCard
      featuredArticleCard.appendChild(tag);

      // Append featuredArticleCard to the page
      this.featuredArticles.appendChild(featuredArticleCard);
    },

    /**
     * Create article element and insert to the page
     *
     * @param {Article} articleData
     */
    createArticle: function (articleData) {
      // Create  article card
      const articleCard = document.createElement("a");
      articleCard.classList.add("article");
      articleCard.href = articleData.url;

      // Create image wrapper
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("article__img-wrapper");

      // Create article image
      const articleImage = document.createElement("img");
      articleImage.classList.add("article__img");
      articleImage.src = articleData.urlToImage;
      articleImage.alt = articleData.title;

      // Create text wrapper
      const textWrapper = document.createElement("div");
      textWrapper.classList.add("article__text");

      // Create article title
      const articleTitle = document.createElement("p");
      articleTitle.classList.add("article__title");
      articleTitle.textContent = articleData.title;

      // Create article date
      const articleDate = document.createElement("span");
      articleDate.classList.add("article__publishedAt");
      articleDate.textContent = articleData.publishedAt;

      // Append articleImage to imageWrapper
      imageWrapper.appendChild(articleImage);

      // Append imageWrapper to articleCard
      articleCard.appendChild(imageWrapper);

      // Append articleTitle to textWrapper
      textWrapper.appendChild(articleTitle);

      // Append articleDate to textWrapper
      textWrapper.appendChild(articleDate);

      // Append textWrapper to articleCard
      articleCard.appendChild(textWrapper);

      // Append articleCard to the page
      this.articles.appendChild(articleCard);
    },
  };

  /* Init App */
  controller.init();
});
