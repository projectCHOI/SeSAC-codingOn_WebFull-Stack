import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/module/bankReducer";
import { useState } from "react";

export default function Bank() {
  const [inputNumber, setInputNumber] = useState(0);
  const balance = useSelector((state) => state.bank);
  console.log("잔액", balance);

  const dispatch = useDispatch();
  return (
    <div>
      <p>잔액: {balance.toLocaleString()}원</p>
      <input
        type="number"
        step={10000}
        value={inputNumber}
        onChange={(e) => setInputNumber(Number(e.target.value))}
      />
      <button onClick={() => dispatch(deposit(inputNumber))}>예금</button>
      <button onClick={() => dispatch(withdraw(inputNumber))}>출금</button>
    </div>
  );
}
