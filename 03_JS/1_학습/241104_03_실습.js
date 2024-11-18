// 숫자와 문자열 타입을 typeof를 사용하여 비교
let numberType = typeof 123; // "number"
let stringType = typeof "";  // "string"

// 첫 번째 출력 줄을 표시
console.log(`"${numberType}"는 "${stringType}" 데이터 타입이 아닙니다.`);

// 배열과 null 타입을 typeof로 확인
let arrayType = typeof [];   // 배열이지만 "object"
let nullType = typeof null;  // null이지만 "object"

// 두 번째 출력 줄을 표시
console.log(`typeof를 배열이나 null에 사용하면 "${arrayType}" 결과를 얻을 수 있습니다.`);

// 예시
let number = 10;
let string = "안녕";
let array = [1, 2, 3];

console.log(`${typeof number}는 ${typeof string} 데이터 타입이 아닙니다.`);
console.log(`typeof를 배열이나 null에 사용하면, ${typeof array} 결과를 얻을 수 있습니다.`);
