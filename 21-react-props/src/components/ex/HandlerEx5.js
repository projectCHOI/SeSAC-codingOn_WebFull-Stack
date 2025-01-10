import { useState } from "react";

export default function ChangeObj({ objArr }) {
  // 현재 멤버를 관리할 인덱스 상태
  const [index, setIndex] = useState(0);

  // 멤버 변경 함수
  const changeMember = () => {
    setIndex((prevIndex) => (prevIndex + 1) % objArr.length);
  };

  return (
    <div>
      <h1>{objArr[index].name}</h1>
      <p>나이: {objArr[index].age}</p>
      <p>별명: {objArr[index].nickName}</p>
      <button onClick={changeMember}>멤버 바꾸기</button>
      <hr />
    </div>
  );
}
