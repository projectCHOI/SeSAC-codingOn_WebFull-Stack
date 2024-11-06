// 내장 메소드 실습
// 리스트
let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"]

// fruits1과 fruits2의 동일한 요소만을 가지는 배열 same
let same = fruits1.filter(fruit => fruits2.includes(fruit));
console.log("공통 요소:", same);

// fruits1과 fruits2의 서로 다른 요소만을 가지는 배열 diff
let diff = fruits1.filter(fruit => !fruits2.includes(fruit));
console.log("서로 다른 요소:", diff);