import React, { useState } from "react";
import Item from "./Item";
import p_data from "../data/p_data.json";

const Sub01 = () => {
  let [title,setTitle] = useState(10000);
  console.log('asdfasdf')

  let modal = (n) => {
    let elModal = document.querySelector(".modal");
    elModal.classList.add("active");
    setTitle(n.title);


    elModal.onclick = () => {
      elModal.classList.remove("active");
    };
  };
  return (
    <div className="flexbox01">
      {p_data.data.map((res, idx) => {
        return <Item key={res.id} item={res} fn={modal}></Item>;
    })}
    <p className="modal">{title}</p>
    </div>
  );
};

export default Sub01;
