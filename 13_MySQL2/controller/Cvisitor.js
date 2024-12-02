// 13_MySQL2/controller/Cvisitor.js
const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};
//
exports.getVistors = (req, res) => {
  res.render("visitor", { data: Visitor.getVisitors() });
};

// DB 연결 전]
// DB 연결 후]
