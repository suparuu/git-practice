import { MyContext } from "./Context";
import React, { useContext } from "react";

const Item = ({ obj }) => {
  const { data, setData } = useContext(MyContext);
  console.log(data);

  const modify = (n) => {
    let content = data.map((obj) => {
      if (obj.num == n) {
        return { ...obj, todo: "aaaaaa" };
      }
      return obj;
    });
    setData(content);
  };
  return (
    <div className="box02">
      <p>
        sdsss
        {/* {obj.num}. {obj.todo} */}
        {/* <button onClick={() => modify(obj.num)}>수정</button>
        <button onClick={() => modify(obj.num)}>삭제</button> */}
      </p>
    </div>
  );
};

export default Item;
