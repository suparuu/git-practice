import AttContext from "./AttContext.js";
import React, { useContext } from "react";
import Item from "./Item.js";

const List = () => {
  const { data } = useContext(AttContext);
  console.log(data);

  return (
    <ul>{data && data.map((obj, key) => <Item key={key} obj={obj} />)}</ul>
  );
};

export default List;
