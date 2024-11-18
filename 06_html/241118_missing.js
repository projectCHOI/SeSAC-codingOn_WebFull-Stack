// 서버만들기
const http = require("http"); // http 모듈
const fs = require("fs"); // 파일 시스템 모듈

// 서버 생성
const server = http.createServer(function (request, response) {
  // 요청 URL 로그 출력
  console.log("url: ", request.url);
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  // response
  // response.write('<p>응답1</p>')
  // response.write('<p>응답2</p>')
  // response.write('<p>응답3</p>')
  // response.end('<h3>응답 종료</h3>')

  // try 에러
  try {
    // HTML 파일 읽기
    const data = fs.readFileSync("./241118_missing.html", "utf-8");
    response.end(data);
  } catch (err) {
    // 에러 처리
    // try 문에서 어떤 에러가 발생되었는지 error 객체를 넘겨줌 (생략가능)
    // try 문에서 에러가 났을 때 실행될 코드
    console.log(err);
    response.end("<h1>Page Not Found</h1>");
  }
  // html
  // const data = fs.readFileSync('./241118_missing.html')
  // response.end(data)
});

// 포트 설정
const PORT = 8080;

// 서버 이벤트 (선택적 사용)
server.on("connection", function () {
  console.log("connection event 발생");
});

server.on("request", function () {
  console.log("request event 발생");
});

// 서버 시작
server.listen(PORT, function () {
  console.log(`Server listening on ${PORT}`);
});
