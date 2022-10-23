const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
const categories = require("./categories/categories.json");
const news = require("./categories/news.json");
app.get("/", (req, res) => {
  res.send(categories);
});
app.get("/categories-news", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const categories_news = news.filter((n) => n.category_id === id);
    res.send(categories_news);
  }
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
  console.log(id);
});
app.listen(port, () => {
  console.log("app listening on ports", port);
});
