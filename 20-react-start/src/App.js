function App() {
  // 문제 1
  const name = "로이";
  const animal = "강아지";

  // 문제 2
  const result = 3 + 5 === 8;

  // 문제 3:
  const a = 10;
  const b = 5;

  return (
    <div className="App">
      <h1>React 연습 문제</h1>
      <h2>문제 1: 반려동물 정보 출력</h2>
      <h3>제 반려 동물의 이름은 {name}입니다.</h3>
      <h3>
        {name}는 {animal}입니다.
      </h3>
      <h2>문제 2: 삼항 연산자 활용</h2>
      {result ? <p>정답입니다!</p> : <p>오답입니다!</p>}
      <h2>문제 3: && 연산자 활용</h2>
      {a > b && <p>a가 b보다 큽니다</p>}
    </div>
  );
}

export default App;
