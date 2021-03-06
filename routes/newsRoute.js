const { Router } = require("express");
const router = Router();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(process.env.NEWS_API_KEY);

// index page route
router.route("/").get(async (req, res) => {
  const { category } = req.query;
  const topHeadlines = await newsapi.v2.topHeadlines({
    category: category,
    country: "us",
  });
  const articles = topHeadlines["articles"];
  res.json(articles);
});

module.exports = router;
