const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const comments = [
  {
    id: 1,
    userid: "apple",
    date: "2024-10-23",
    comment: "안녕하세요~~~~~~~~~~~~",
  },
  {
    id: 2,
    userid: "banana",
    date: "2024-11-23",
    comment: "반갑습니다!!!!!~~~~~",
  },
  {
    id: 3,
    userid: "cocoa",
    date: "2024-09-23",
    comment: "아무거나 쓰겠습니다...",
  },
  {
    id: 4,
    userid: "donut",
    date: "2024-10-31",
    comment: "곧 점심시간 이네요..",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});
// comment로 이동
app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments", { commentInfos: comments });
});
// comment에서 id로
app.get("/comment/:id", (req, res) => {
  //   console.log(req.params);
  //   console.log(req.query);
  const commentId = req.params.id;
  res.render("comment");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
