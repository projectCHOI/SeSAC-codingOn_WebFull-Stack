const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// ejs views 미들웨어 설정
app.set("view engine", "ejs"); // 템플릿 엔진 설정
app.set("views", "./views"); // 뷰파일 폴더 경로 설정

// 정적 파일 관리
// app.use("/static", express.static(__dirname + "/public"));

// body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 요청 > 응답 */
app.get("/", function (req, res) {
  res.render("index");
});

// form get요청
app.get("/getForm", function (req, res) {
  console.log(req.query);
  // res.send("form data get 요청 성공!");
  // title "GET"
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
});

// form post요청
app.post("/postForm", function (req, res) {
  console.log(req.body);
  res.send("form data post 요청 성공!");
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
