// 13_MySQL2/model/Visitor.js
const mysql = require("mysql");

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "your_database",
});

// 데이터베이스 연결
connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to database.");
});

exports.getVisitors = (callback) => {
  // 방문자 데이터를 데이터베이스에서 가져오는 함수
  connection.query("SELECT * FROM visitors", (err, results) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, results);
  });
};
