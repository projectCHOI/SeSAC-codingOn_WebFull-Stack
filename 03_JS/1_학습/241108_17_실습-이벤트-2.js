// 요소 선택
const form = document.querySelector("form");
const userIdInput = document.getElementById("userid");
const commentInput = document.getElementById("comment");
const commentList = document.querySelector(".comment-list");

// 폼 제출 이벤트 리스너 추가
form.addEventListener("submit", (event) => {
  event.preventDefault(); // 폼 제출 시 새로고침 방지

  // 아이디와 댓글 값 가져오기
  const userId = userIdInput.value.trim();
  const comment = commentInput.value.trim();

  // 아이디와 댓글이 비어있지 않을 경우에만 추가
  if (userId && comment) {
    // 새로운 li 요소 생성 및 내용 설정
    const listItem = document.createElement("li");
    listItem.textContent = `${userId} - ${comment}`;

    // 댓글 리스트에 li 요소 추가
    commentList.appendChild(listItem);

    // 입력 필드 초기화
    userIdInput.value = "";
    commentInput.value = "";
  } 
});
