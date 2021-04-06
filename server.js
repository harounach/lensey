require("dotenv").config();
const express = require("express");
const app = express();

// server port
const PORT = 3000;

const newsRoute = require("./routes/newsRoute");

// Apply middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// Set up routes
app.use("/news", newsRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server listening on port: ${PORT} visit http://localhost:${PORT}`
  );
});
