import React from "react";

const Item = ({item,t}) => {
    /* let detail =()=>{
        fn(item.photo)
    } */
    return(
        <div className="flexbox03" onClick={()=>t(item)}>
            <div className="imgbox02">
                <img src={item.photo}></img>
                <br/>
                <span>{item.name}</span>
            </div>
        </div> 
    )   

};
export default Item;
