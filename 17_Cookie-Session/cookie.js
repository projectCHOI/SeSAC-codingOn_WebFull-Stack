const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.use(cookieParser());

const cookieConfig = {
  maxAge: 60 * 1000, // 1분
  httpOnly: true,
  signed: false,
};

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("cookie");
});

app.get("/getCookie", (req, res) => {
  const cookieValue = req.cookies.myCookie;
  res.send(`Cookie Value: ${cookieValue}`);
});

app.get("/setCookie", (req, res) => {
  res.cookie("myCookie", "cookie~~~", cookieConfig);
  res.send("set cookie 완료, 응답 종료!");
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("myCookie");
  res.send("Cookie cleared!");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
