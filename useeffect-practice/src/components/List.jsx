import { useEffect } from "react";
import { useState } from "react";

const List = ({ items }) => {
  const [selection, setSelection] = useState(null);
  const [prevItems, setPrevItems] = useState(items);
  //state는 set함수로 수정하기 전 까지는 첫 생성 시의 값으로 고정되어 있음.
  //props 값을 초기 값으로 할 때 처음 전달된 값이 계속 유지됨(props가 부모 요소의 state인 경우 그 state의 initialState값)

  const changeSelectionHandler = () => {
    setSelection("수정된 selection");
  };

  if (items !== prevItems) {
    setPrevItems(items);
    setSelection(null);
  }

  return (
    <div>
      <h1>리스트 컴포넌트</h1>
      <button onClick={changeSelectionHandler}>셀렉션 변경</button>
      <p>{selection}</p>
    </div>
  );
};

export default List;
