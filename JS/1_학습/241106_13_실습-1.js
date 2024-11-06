// 배열과 반복문 실습
// 1~100까지의 배열 생성
let numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

// 합계 계산: for문 사용
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}
console.log("for문을 사용한 합계:", sum1);

// 합계 계산: for of문 사용
let sum2 = 0;
for (let num of numbers) {
    sum2 += num;
}
console.log("for of문을 사용한 합계:", sum2);

// 합계 계산: forEach문 사용
let sum3 = 0;
numbers.forEach(num => {
    sum3 += num;
});
console.log("forEach문을 사용한 합계:", sum3);
