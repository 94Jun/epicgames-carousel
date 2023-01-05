import { useState } from "react";
import List from "./List";

const Parent = () => {
  const [items, setItems] = useState("초기 아이템");
  const changeItemsHandler = () => {
    setItems((prev) => {
      return prev + " 수정";
    });
  };
  return (
    <div>
      <h1>버튼을 누르면 아이템이 변경됨</h1>
      <button onClick={changeItemsHandler}>아이템 변경</button>
      <List items={items} />
    </div>
  );
};

export default Parent;
