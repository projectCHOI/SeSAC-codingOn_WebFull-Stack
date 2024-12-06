const User = require("../model/User");

// 회원가입 처리
exports.signup = (req, res) => {
  const { userid, name, pw } = req.body;
  User.signup({ userid, name, pw }, (result) => {
    if (result) {
      res.status(201).json({ success: true, message: "회원가입 성공" });
    } else {
      res.status(500).json({ success: false, message: "회원가입 실패" });
    }
  });
};

// 로그인 처리
exports.signin = (req, res) => {
  const { userid, pw } = req.body;
  User.signin({ userid, pw }, (user) => {
    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "로그인 실패" });
    }
  });
};

// 회원정보 수정
exports.editProfile = (req, res) => {
  const { id, name, pw } = req.body;
  User.update({ id, name, pw }, (result) => {
    if (result) {
      res.status(200).json({ success: true, message: "정보 수정 성공" });
    } else {
      res.status(500).json({ success: false, message: "정보 수정 실패" });
    }
  });
};

// 회원탈퇴 처리
exports.deleteProfile = (req, res) => {
  const { id } = req.body;
  User.delete(id, (result) => {
    if (result) {
      res.status(200).json({ success: true, message: "회원 탈퇴 성공" });
    } else {
      res.status(500).json({ success: false, message: "회원 탈퇴 실패" });
    }
  });
};
