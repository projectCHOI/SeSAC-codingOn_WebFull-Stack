"use strict";

const Sequelize = require("sequelize");

const config = require(__dirname + "/../config/config.js")["devel"];
const db = {};
// (1) Sequelize 클레스를 통해서 Sequelize 객체를 생성
sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// (2) 모델을 불ㄹ러오면서 인자로 정보 전달
const PlayerModel = require("./Player")(this.sequelize, Sequelize);
const ProfileModel = require("./profile")(this.sequelize, Sequelize);
const GameModel = require("./Game")(this.sequelize, Sequelize);
const TeamModel = require("./Team")(this.sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(this.sequelize, Sequelize);

// (3)모델간 관계 설정
db.Player;
db.Profile;
db.Game;
db.Team;
db.TeamGame;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
