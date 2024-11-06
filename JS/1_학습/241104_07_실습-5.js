// 0 ~ 100의 숫자 중에서 2 또는 5의 배수 총합 구하기
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0 && i % 5 == 0) {
    sum+=i;
  }
}
console.log(sum);