/* 1. 태그 내부 내용 */
/* 
- innerText
- textContent
- innerHTML
*/
let div1 = document.getElementById('div1')
div1.innerText='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /'
// 2칸이상의 공백문자 제거, 앞뒤로 공백문자 제거
console.log(div1.innerText)

div1.innerHTML='여기는 <b>첫번째</b> 태그입니다.&hearts;'

div1.textContent='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /'
console.log(div1.textContent)

/* 2. 속성에 접근 */
/* 
- 요소.속성명
- getAttribute(): 속성값 가져오기
- setAttribute(): 속성값 설정하기
*/

// pooh, naver 아이디
let naver = document.getElementById('naver')
console.log(naver)
// naver.setAttribute("속성이름", "바꿔줄 속성값")
naver.setAttribute("href", "https://www.google.com")
console.log(naver.href)
console.log(naver.getAttribute("href"))

console.log(document.querySelector('#pooh').src)
document.querySelector('#pooh').alt = "푸사진"

/* 3. CSS 변경 */
let h1 = document.querySelector('h1')
let list = document.querySelectorAll('li')
// console.log(h1)
// console.log(list)

// 배경색을 분홍색, 글자색 흰색, 글씨크기 1.3rem
for(let el of list){
    // el.style.color = "#fff"
    // el.style.backgroundColor ="pink"
    // el.style.fontSize = "1.3rem"
    // el.classList.add('friends')
}

h1.classList.add('add-h1') // 클래스 추가
h1.classList.remove('add-h1') // 클래스 제거
h1.classList.toggle('add-h1') // 클래스가 없으면 추가, 있으면 제거

// 클래스가 있는지 없는지 확인 >> true, false "반환"
console.log(h1.classList.contains('add-h1'))
console.log(h1.classList.contains('add-h2'))
console.log(h1.classList) // 선택된요소의 클래스 목록 확인