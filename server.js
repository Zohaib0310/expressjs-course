const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

//Setup Static Folders(like .html)
// app.use(express.static(path.join(__dirname, "public")));

const posts = [
  {
    id: 1,
    title: "Post One",
  },
  {
    id: 2,
    title: "Post Two",
  },
  {
    id: 3,
    title: "Posts Three",
  },
];

//Sending all posts to client from server
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(port, () => console.log(`Server is listening at port ${port}`));
