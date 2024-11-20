// 문제: 작성된 'callback'을 'Promise'형태로 변환하기
// 기존코드
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}

function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

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

// ------정답------- //
// function callPromise(name) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       console.log(name);
//       resolve(name); // cb 대신 resolve로 값 넘기기
//     }, 1000);
//   });
// }

// function backPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       console.log("back");
//       resolve("back");
//     }, 1000);
//   });
// }

// function hellPromise() {
//   // reject 생략 가능
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("callback hell");
//     }, 1000);
//   });
// }

// // then ~ catch
// callPromise("kim")
//   .then((result) => {
//     console.log(result + " 반가워");
//     return backPromise();
//   })
//   .then((txt) => {
//     // txt = 이전 then의 리턴값 = "back"
//     console.log(txt + "을 실행했구나");
//     return hellPromise();
//     // return "안녕하세요";
//   })
//   .then((msg) => {
//     console.log("여기는 " + msg);
//   });

// //   async/await
// async function execute() {
//   const name = await callPromise("allie");
//   console.log(name + "반가워");
//   const back = await backPromise();
//   console.log(back + "을 실행했구나");
//   const hell = await hellPromise();
//   console.log("여기는 " + hell);
// }

// execute();
