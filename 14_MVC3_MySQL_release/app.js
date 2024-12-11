const express = require("express");
const app = express();
const PORT = 8000;

// 라우터 파일 불러오기
const userRouter = require("./routes/user");

// EJS 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 경로 설정
app.use("/static", express.static(__dirname + "/static"));

// body-parser 기능 (JSON 데이터 및 URL-encoded 데이터 파싱)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 기본 경로 처리
app.get("/", (req, res) => {
  res.redirect("/user/signin");
});

// 라우팅 설정
app.use("/user", userRouter);

// 404 에러 처리
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Error" });
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
