const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// multer 설정
const uploadSetting = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 확장자
      //   userid, name, pw, file..
      // req.body.userid == "id"
      done(null, req.body.userid + Date.now() + ext);
    },
  }),
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/register", uploadSetting.single("profileImg"), (req, res) => {
  console.log(req.body);
  /* 
  {
  userid: 'eee',
  password: 'eee',
  userName: 'eee',
  age: '123'
 }
  */
  console.log(req.file);
  /* 
 {
  fieldname: 'profileImg',
  originalname: '26139_img.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination: 'uploads/',
  filename: 'eee1732677624202.png',
  path: 'uploads\\eee1732677624202.png',
  size: 469955
}
 */

  //   res.send("요청 잘 받았다!");
  res.render("result", {
    userInfo: req.body,
    src: req.file.path,
  });
  //   res.render("result", {
  //     ...req.body,
  //     src: req.file.path,
  //   });
});
// port 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
