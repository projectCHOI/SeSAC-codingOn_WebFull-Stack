import { Link } from "react-router-dom";

export default function HeaderMenu() {
  return (
    <header>
      <Link to={"/"}>홈으로</Link>
      <Link to={"/lecture"}>수업</Link>
      <Link to={"/practice"}>연습하기</Link>
    </header>
  );
}
