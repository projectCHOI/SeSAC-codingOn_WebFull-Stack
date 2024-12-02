// 13_MySQL2/controller/Cvisitor.js

// const Visitor = require("../model/Visitor");
// // console.log(Visitor.getVisitors());

// /* / GET */
// exports.main = (req, res) => {
//   res.render("index");
// };

// /* /visitors GET */
// exports.getVistors = (req, res) => {
//   res.render("visitor", { data: Visitor.getVisitors() });
// };

// 13_MySQL2/controller/Cvisitor.js
const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVistors = (req, res) => {
  Visitor.getVisitors((err, data) => {
    if (err) {
      return res.status(500).send("Error retrieving visitor data");
    }
    res.render("visitor", { data: data });
  });
};
