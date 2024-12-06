const express = require("express");
const router = express.Router();
const Cuser = require("../controller/Cuser");

// 회원가입
router.post("/signup", Cuser.signup);

// 로그인
router.post("/signin", Cuser.signin);

// 회원정보 수정
router.post("/profile/edit", Cuser.editProfile);

// 회원탈퇴
router.delete("/profile/delete", Cuser.deleteProfile);

module.exports = router;
