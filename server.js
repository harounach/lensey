require("dotenv").config();
const express = require("express");
const app = express();

const expressLayouts = require("express-ejs-layouts");

// server port
const PORT = 3000;

const indexRoute = require("./routes/index");

// Apply middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set up the view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// Set up routes
app.use("/", indexRoute);

app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server listening on port: ${PORT} visit http://localhost:${PORT}`
  );
});
