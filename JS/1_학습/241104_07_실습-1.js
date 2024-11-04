let age = prompt("나이를 입력하세요:", "");

// 입력값을 숫자로 변환
age = Number(age);

// if 문 이용
if (age >= 20) {
    console.log("성인");
} else if (age >= 17) {
    console.log("고등학생");
} else if (age >= 14) {
    console.log("중학생");
} else if (age >= 8) {
    console.log("초등학생");
} else if (age >= 0) {
    console.log("유아");
} else {
    console.log("올바른 나이를 입력하세요."); // 예외 처리
}
