import { MyContext } from "./Context";
import React, { useContext, useEffect } from "react";
import Item from "./Item";
import Textbox from "./Textbox";
import $ from "jquery";

const List = () => {
  const { data, setData } = useContext(MyContext);
  setData([2122]);

  // console.log(data);

  // useEffect(() => {
  //   console.log("업데이트");
  // }, [data]);

  const btn = () => {
    $(".textbox01").toggle();
  };

  return (
    <section>
      {data}
      <div className="box01">
        <div className="textbox001">
          <button onClick={btn}>+</button>
          <Textbox></Textbox>
          아이템
          {data}
          {/* <Item></Item> */}
        </div>
        {/* {data && data.map((obj, key) => <Item key={key} obj={obj}></Item>)} */}
      </div>
    </section>
  );
};

export default List;
