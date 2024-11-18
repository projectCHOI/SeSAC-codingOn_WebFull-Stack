const express = require("express");
const app = express();

// EJS 템플릿 엔진 설정
app.set("view engine", "ejs");

// EJS 템플릿 파일 위치 설정 (views 디렉토리)
app.set("views", __dirname + "/views");

// 라우터 설정
app.get("/", (req, res) => {
  res.render("index", { title: "EJS Example", message: "Hello, EJS!" });
});

// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
