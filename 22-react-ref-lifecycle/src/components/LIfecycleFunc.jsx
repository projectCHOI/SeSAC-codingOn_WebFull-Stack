import { useEffect, useState } from "react";

const MyComponent = ({ number }) => {
  const [text, setText] = useState("");
  /* 
    useEffect(effect[, dependency_array])
    - effect: 콜백 함수
    - dependency_array(의존성 배열)
      의존성 배열에 있는 데이터가 변하면 콜백 함수 실행
       - []: Mount 되었을 때만 동작
       - 생략: Mount, Update시 언제나 동작
       - [data]: Mount, 'data' 가 update되었을 때 동작
    */

  // Mount 시점에 실행
  useEffect(() => {
    console.log("함수형 컴포넌트 MOUNT!!! 🐛");
  }, []);

  // Unmount 시점에 실행
  useEffect(() => {
    return () => {
      console.log("함수형 컴포넌트 UNMOUNT!! 🔥"); // unmount
    };
  }, []);

  // update 시점에 실행 + mount
  useEffect(() => {
    // text, number 스테이트가 바뀔 때 모두 실행됨
    console.log("함수형 컴포넌트 UPDATE!! 될때마다🦊");
  });

  // 특정 state 업데이트 + mount
  useEffect(() => {
    console.log("함수형 컴포넌트 UPDATE!! text 변경✅");
  }, [text]);
  return (
    <>
      <p>MyComponent: {number}</p>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </>
  );
};

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button onClick={changeNumber}>plus</button>
      <button onClick={changeVisible}>on/off</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};
export default LifeCycleFunc;
