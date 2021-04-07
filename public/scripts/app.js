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
      console.log("Init View");
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
    },

    /**
     * Populate all articles
     *
     * @param {Array<Article>} articlesData
     */
    populateAllArticles: function (articlesData) {
      console.log(articlesData);
    },

    /**
     * Create article element and insert to the page
     *
     * @param {Article} featuredarticleData
     */
    createFeaturedArticle: function (featuredarticleData) {},

    /**
     * Create article element and insert to the page
     *
     * @param {Article} articleData
     */
    createArticle: function (articleData) {},
  };

  /* Init App */
  controller.init();
});
