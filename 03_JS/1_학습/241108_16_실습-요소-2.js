// TodoList 변경하기
// 모든 <li> 요소 선택
const listItems = document.querySelectorAll('li');

// 각 <li> 요소를 반복하여 class 변경
listItems.forEach((item) => {
  const taskText = item.textContent.trim();

  // 완료한 항목 ("점심 먹기"와 "커피 마시기")을 'done' 클래스로 변경
  if (taskText === '점심 먹기' || taskText === '커피 마시기') {
    item.classList.remove('todo');
    item.classList.add('done');
  } 
  // 그 외의 항목을 'todo' 클래스로 변경
  else {
    item.classList.remove('done');
    item.classList.add('todo');
  }
});
