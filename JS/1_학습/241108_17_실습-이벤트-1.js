// 요소 선택
const body = document.body;
const button = document.querySelector("button");
const colorText = document.querySelector("h2");

// 랜덤 색상 생성 함수
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// 버튼 클릭 이벤트 리스너 추가
button.addEventListener("click", () => {
  const randomColor = getRandomColor();
  
  // 배경색과 h2 태그 내용 변경
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});
