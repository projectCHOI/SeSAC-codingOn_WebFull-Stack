// 주말과 평일 출력하기

// 오늘 날짜
let today = new Date().getDay();

// if문 사용 주말 또는 평일 구분
if (today === 0 || today === 6) {
    console.log("주말");
} else {
    console.log("평일");
}
