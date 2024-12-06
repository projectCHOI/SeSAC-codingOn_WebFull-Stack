const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sesac",
});

connection.connect();

// 회원가입
exports.signup = (data, callback) => {
  const query = "INSERT INTO user (userid, name, pw) VALUES (?, ?, ?)";
  connection.query(query, [data.userid, data.name, data.pw], (err, result) => {
    if (err) {
      console.error(err);
      return callback(false);
    }
    callback(true);
  });
};

// 로그인
exports.signin = (data, callback) => {
  const query = "SELECT * FROM user WHERE userid = ? AND pw = ?";
  connection.query(query, [data.userid, data.pw], (err, results) => {
    if (err) {
      console.error(err);
      return callback(null);
    }
    callback(results[0]);
  });
};

// 회원정보 수정
exports.update = (data, callback) => {
  const query = "UPDATE user SET name = ?, pw = ? WHERE id = ?";
  connection.query(query, [data.name, data.pw, data.id], (err, result) => {
    if (err) {
      console.error(err);
      return callback(false);
    }
    callback(true);
  });
};

// 회원탈퇴
exports.delete = (id, callback) => {
  const query = "DELETE FROM user WHERE id = ?";
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      return callback(false);
    }
    callback(true);
  });
};
