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

// formpost 요청
app.post("/js-check-Form", function (req, res) {
  console.log(req.body); // 전달된 데이터 확인
  res.send("요청 성공!");
});

// 실습문제 -----------------------------
// 1. practice1으로 들어갔을 때 practice1.ejs을 화면에 보여줘야함.
// 2. practice2으로 들어갔을 때 practice2.ejs을 화면에 보여줘야함.
// 3. practice1.ejs, practice2.ejs에는 각각 GET, POST를 통한 폼 요청이 있어야한다.
// 4. 결과 페이지는 practice_result.ejs에 통합 관리된다.

// 1. practice1에 대한 GET 요청
app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});

// 2. practice2에 대한 GET 요청
app.get("/practice2", (req, res) => {
  res.render("practice/practice1");
});

// 3. 주소 지정 form GET 요청
app.get("/practice1/result", (req, res) => {
  res.render("practice/practice_result", { data: req.query });
});
// 4. 주소 지정 form POST 요청
app.post("/practice2/result", (req, res) => {
  res.render("practice/practice_result", { data: req.body });
});

//------------------------------
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
