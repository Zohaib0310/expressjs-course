const express = require("express");
const path = require("path");
const app = express();

//Setup Static Folders(like .html)
// app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(8000, () => console.log(`Server is listening at port 8000`));
