const express = require("express");
const app = express();

const PORT = 8080;

app.set("view engine", "ejs");

// TODO: 쿠키 미들웨어 설정
app.get("/", (req, res) => {
  res.render("index");
  // TODO: 쿠키값 가져오기 및 index.ejs에 보내기
  //   res.render("index", {popup:쿠키값});
});

app.post("/set-cookie", (req, res) => {
  // TODO: 쿠키 생성하기
  res.send("쿠키 생성 성공!!!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});