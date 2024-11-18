// 문제: 작성된 'callback'을 'Promise'형태로 변환하기
// 기존코드
// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }

// function back(cb) {
//   setTimeout(function () {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }

// function hell(cb) {
//   setTimeout(function () {
//     cb("callback hell");
//   }, 1000);
// }

// // 기존 호출 방식 (콜백)
// call("kim", function (name) {
//   console.log(name + " 반가워");
//   back(function (txt) {
//     console.log(txt + " 을 실행했구나");
//     hell(function (message) {
//       console.log("여기는 " + message);
//     });
//   });
// });

// 변경코드
function call(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("callback hell");
    }, 1000);
  });
}

// Promise 기반 호출
call("kim")
  .then((name) => {
    console.log(name + " 반가워");
    return back();
  })
  .then((txt) => {
    console.log(txt + " 을 실행했구나");
    return hell();
  })
  .then((message) => {
    console.log("여기는 " + message);
  });
