const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 연결
const userRouter = require("./routes/user");
app.use("/", userRouter);

// 포트 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});