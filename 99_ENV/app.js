const dotenv = require("dotenv");
dotenv.config(); // 반드시 최상단에 위치해야 환경변수 로드가 가능합니다.

const express = require("express");
const app = express();

console.log("db pw", process.env.DB_PASSWORD); // 이제 환경변수를 제대로 읽습니다.
const PORT = process.env.PORT;

console.log("PORT number", PORT);
console.log("db name", process.env.DB_DATABSE);

app.get("/", (req, res) => {
  res.send("get요청입니다.");
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
