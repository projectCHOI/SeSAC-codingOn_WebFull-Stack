import { useState } from "react";

export default function PracticeState() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    // number = number + 1; // 불가능!
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber((prevState) => {
      return prevState - 2;
    });
  };
  return (
    <div>
      <p>숫자: {number}</p>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
    </div>
  );
}
