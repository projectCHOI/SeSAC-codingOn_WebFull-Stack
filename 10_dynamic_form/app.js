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

const realId = "banana";
const realPw = "4321";

/* API */
app.get("/", (req, res) => {
  res.render("index");
});

/* ajax 요청 */
// /ajax GET
app.get("/ajax", (req, res) => {
  console.log(req.query);
  //   res.send("응답!");
  res.send(req.query);
});

// /ajax POST
app.post("/ajax", (req, res) => {
  // body-parser 설정을 해야 req.body를 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
});

/* axios 요청 */
// /axios GET
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
  /* 
  {name:'allie', gender:'여성'}
  */
});

// /axios POST
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* fetch 요청 */
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // 클라이언트에서 .text() 사용
  //   res.send("응답완료!!");

  // 클라이언트에서 .json() 사용
  res.send(req.query); // 객체를 보낸다.
});

app.post("/fetch", (req, res) => {
  console.log(req.body); // 객체
  //{ name: 'allie', gender: '여성' }
  res.send(req.body);
});

// 외부 api 사용하기
app.get("/api", (req, res) => {
  res.render("api");
});

/* 실습문제 */
// const realId = "banana";
// const realPw = "4321";
app.get("/practice1", (req, res) => {
  res.render("practice/practice1.ejs");
});
app.get("/practice2", (req, res) => {
  res.render("practice/practice2.ejs");
});

// /axios-practice1 GET
app.get("/axios-practice1", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
// 포트 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
