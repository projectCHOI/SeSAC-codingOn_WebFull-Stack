// 최대 숫자를 prompt로 입력받기
let maxNumber = prompt("검사할 숫자 입력(10000 이하):", "");

// 입력값을 숫자로 변환
maxNumber = Number(maxNumber);

if (isNaN(maxNumber) || maxNumber < 1 || maxNumber > 10000) {
    console.log("1과 10000 사이의 유효한 숫자를 입력하세요.");
} else {
    console.log(`1부터 ${maxNumber}까지 13의 배수이면서 홀수인 숫자:`);

    // 13의 배수이면서 홀수인 숫자 찾기
    for (let i = 1; i <= maxNumber; i++) {
        if (i % 13 === 0 && i % 2 !== 0) {
            console.log(i);
        }
    }
}
