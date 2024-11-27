const fs = require("fs"); // 파일 시스템 모듈 추가
const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

// uploads 폴더가 없으면 생성
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir); // uploads 폴더 생성
}

// Multer를 이용한 파일 저장 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // 저장 경로 설정
  },
  filename: (req, file, cb) => {
    // 파일 이름: "유저아이디-현재시간.확장자"
    const uniqueName = `${req.body.id}-${Date.now()}${path.extname(
      file.originalname
    )}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage }); // Multer 설정 적용

// 미들웨어 설정
app.set("view engine", "ejs"); // 뷰 엔진을 ejs로 설정
app.set("views", "./views"); // 뷰 파일의 폴더 경로 설정
app.use("/static", express.static(path.join(__dirname, "static"))); // 정적 파일 제공
app.use("/uploads", express.static(uploadDir)); // 업로드 파일 제공

// 라우트 설정
app.get("/", (req, res) => {
  res.render("index2"); // 루트 경로에서 index2.ejs 렌더링
});

// 회원가입 폼 데이터 및 파일 처리
app.post("/submit", upload.single("profile"), (req, res) => {
  const { id, password, name, age } = req.body; // 폼 데이터 가져오기
  const profileImage = `/uploads/${req.file.filename}`; // 업로드된 파일 경로

  // 회원가입 결과를 result.ejs에 렌더링
  res.render("result2", { id, password, name, age, profileImage });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`); // 서버 주소 출력
});
