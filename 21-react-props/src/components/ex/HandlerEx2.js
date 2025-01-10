import { useState } from "react";

export default function HandlerEx2() {
  // state로 글 내용과 색상 관리
  const [text, setText] = useState("검정색 글씨");
  const [color, setColor] = useState("black");

  // 빨간색 버튼 클릭 핸들러
  const handleRedClick = () => {
    setText("빨간색 글씨");
    setColor("red");
  };

  // 파란색 버튼 클릭 핸들러
  const handleBlueClick = () => {
    setText("파란색 글씨");
    setColor("blue");
  };

  return (
    <div>
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={handleRedClick}>빨간색</button>
      <button onClick={handleBlueClick}>파란색</button>
    </div>
  );
}
