import { useState } from "react";

export default function HandlerEx3() {
  // state로 텍스트 가시성 및 버튼 텍스트 관리
  const [isVisible, setIsVisible] = useState(true);

  // 버튼 클릭 핸들러
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "사라져라" : "보여라"}
      </button>
      {isVisible && <h1>안녕하세요</h1>}
      <hr />
    </div>
  );
}
