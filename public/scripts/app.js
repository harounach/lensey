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
        .then((articlesData) => {
          // render view with new data
          view.render(articlesData.data);
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
     * @param {Array<Article>} articles - Articles Array
     */
    render: function (articles) {
      console.log(articles);
    },
  };

  /* Init App */
  controller.init();
});
