function cal() {
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    const operator = document.getElementById("operator").value.trim();
    const resultField = document.getElementById("result");
  
    // 연산 수행 및 결과 할당
    const result = 
      operator === "+" ? value1 + value2 :
      operator === "-" ? value1 - value2 :
      operator === "*" ? value1 * value2 :
      operator === "/" ? (value2 !== 0 ? value1 / value2 : "오류: 0으로 나눌 수 없습니다") :
      "오류: 올바른 연산자를 입력하세요 (+, -, *, /)";
  
    // 결과 표시
    resultField.value = result;
  }
  
  function resetInput() {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("operator").value = "";
    document.getElementById("result").value = "";
  }
  