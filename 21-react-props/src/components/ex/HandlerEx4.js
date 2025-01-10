import { useState } from "react";

export default function HandlerEx4() {
  // 상태 관리
  const [count, setCount] = useState(2);

  // 증가 버튼 클릭 핸들러
  const increase = () => {
    setCount(count + 1);
  };

  // 감소 버튼 클릭 핸들러
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>
        {count} <span>{count >= 8 ? "😈" : "😊"}</span>
      </h1>
      <button onClick={increase}>1 증가</button>
      <button onClick={decrease}>1 감소</button>
    </div>
  );
}
