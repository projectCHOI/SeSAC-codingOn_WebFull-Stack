import { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import Select from "./Select";

export default function EntirePractice() {
  const [data, setData] = useState({
    fruit: "apple",
    background: "white",
    color: "black",
    content: "text",
  });
  return (
    <div>
      <Select setData={setData} />
      <Input setData={setData} />
      <Result data={data} />
    </div>
  );
}
