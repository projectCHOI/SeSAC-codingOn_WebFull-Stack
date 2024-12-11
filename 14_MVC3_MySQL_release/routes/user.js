const express = require("express");
const router = express.Router();
const Cuser = require("../controller/Cuser");

// 회원가입 페이지 렌더링 (GET /signup)
router.get("/signup", (req, res) => {
  res.render("signup", { title: "회원가입" });
});

// 회원가입 처리 (POST /signup)
router.post("/signup", Cuser.signup);

// 로그인 페이지 렌더링 (GET /signin)
router.get("/signin", (req, res) => {
  res.render("signin", { title: "로그인" });
});

// 로그인 처리 (POST /signin)
router.post("/signin", Cuser.signin);

// 회원정보 수정 (POST /profile/edit)
router.post("/profile/edit", Cuser.editProfile);

// 회원탈퇴 처리 (DELETE /profile/delete)
router.delete("/profile/delete", Cuser.deleteProfile);

module.exports = router;
