import { useState } from "react";

export default function MapExample() {
  // 초기 데이터
  const [users, setUsers] = useState([
    { name: "코디", email: "codi@gmail.com" },
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 사용자 추가 함수
  const handleAddUser = () => {
    if (name && email) {
      setUsers([...users, { name, email }]);
      setName("");
      setEmail("");
    }
  };

  // "Enter" 키로 사용자 추가
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddUser();
    }
  };

  // 사용자 삭제 함수
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, idx) => idx !== index);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>사용자 등록</h2>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyPress={handleKeyPress} // Enter 키 이벤트 핸들러 추가
      />
      <button onClick={handleAddUser}>등록</button>

      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            onDoubleClick={() => handleDeleteUser(index)} // 더블 클릭 시 삭제
          >
            {user.name}: {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
