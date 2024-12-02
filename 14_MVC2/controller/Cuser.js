const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  console.log(req.body);
  const { realId, realPw } = User.userInfo();

  if (realId === req.body.userId && realPw === req.body.userPw) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
};
