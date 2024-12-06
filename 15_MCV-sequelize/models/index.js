"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.json")["development"];
console.log("config", config);
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 설정 정보를 sequelize 라는 key안에 넣어주는 중
db.sequelize = sequelize;
// {
//   sequelize:sequelize
// }
// 시퀄라이즈 모듈을 Sequelize 라는 key안에 넣어주는 중
db.Sequelize = Sequelize;
// {
//   sequelize:sequelize,
//   Sequelize: Sequelize
// }

module.exports = db;
