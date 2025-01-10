import { useState } from "react";

export default function HandlerEx() {
  // state 선언
  const [message, setMessage] = useState("Hello World!");

  // 버튼 클릭 이벤트 핸들러
  const handleClick = () => {
    setMessage("Goodbye World!");
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
}
