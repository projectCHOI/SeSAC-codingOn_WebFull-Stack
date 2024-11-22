const express = require("express");
const app = express();
const PORT = 8080;
/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* API */
app.get("/", (req, res) => {
  res.render("index");
});

/*--------------------------*/
app.get("/ajax", (req, res) => {
  const { name, gender } = req.query; // GET 요청의 데이터 추출
  res.json({ name, gender }); // JSON 응답
});

app.post("/ajax", (req, res) => {
  const { name, gender } = req.body; // POST 요청의 데이터 추출
  res.json({ name, gender }); // JSON 응답
});

app.get("/axios", (req, res) => {
  const { name, gender } = req.query;
  res.json({ name, gender });
});

app.post("/axios", (req, res) => {
  const { name, gender } = req.body;
  res.json({ name, gender });
});

/*?*/

// 가장 아래 위치
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
