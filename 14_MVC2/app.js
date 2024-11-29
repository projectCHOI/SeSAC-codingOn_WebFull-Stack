const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 실제 로그인 정보
const realId = "banana";
const realPw = "4321";

// 실습문제
app.get("/practice1", (req, res) => {
  res.render("practice1");
});

// 로그인 요청 처리
app.post("/practice2", (req, res) => {
  const { userId, userPw } = req.body;
  if (userId === realId && userPw === realPw) {
    res.send({ isSuccess: true, userId });
  } else {
    res.send({ isSuccess: false });
  }
});

// 포트 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
