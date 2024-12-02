const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index", { userInfos: User.userInfo() });
};

exports.login = (req, res) => {
  console.log(req.body);
  console.log(User.userInfo().realId);

  if (
    User.userInfo().realId === req.body.userId &&
    User.userInfo().realPw === req.body.userPw
  ) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else res.send({ isSuccess: false });
};
