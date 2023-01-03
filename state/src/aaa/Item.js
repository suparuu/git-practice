import React from "react";

const Item = ({item,fn}) => {
    let detail =()=>{
        fn(item.photo)
    }
  return (
      <div className="box" onClick={()=>fn(item)} >
        <div className="circle"><img src={item.photo}></img></div>
        <br />
        <span>{item.title}</span>
        <span>${item.price}</span>
      </div>
      
  );
};

export default Item;
