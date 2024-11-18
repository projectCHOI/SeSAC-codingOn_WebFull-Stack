let writer = document.querySelector('#writer');
let content = document.querySelector('#content');
console.log(writer, content);

// [등록] 버튼 클릭시 writeNote() 함수가 실행되도록 인라인 방식으로 미리 설정해 두었습니다.
function writeNote() {
  //작성자나 내용이 빈 경우 경고하고 함수 종료
  if (writer.value === '' || content.value === '') {
    alert('작성자와 내용을 모두 입력해주세요 🙂');
    return;
  }

  const tr = document.createElement('tr');

  const writerTd = document.createElement('td');
  writerTd.textContent = writer.value;

  const contentTd = document.createElement('td');
  contentTd.textContent = content.value;

  const dateTd = document.createElement('td');
  const today = new Date();
  dateTd.textContent = today.toLocaleDateString();
  
  tr.append(writerTd, contentTd, dateTd);
  document.querySelector('#table').append(tr);

  writer.value = '';
  content.value = '';
}