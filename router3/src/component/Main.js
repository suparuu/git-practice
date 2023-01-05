import React from "react";
import { useParams } from "react-router-dom";
import data from "../Data.json";

const Main = () => {
  let { page } = useParams();
  page = page || "Home";
  console.log(data[page][0]);
  let arr = data[page];

  /* const elBtn = document.querySelector('button'),
  elHead = document.querySelector('header');

  elBtn.addEventListener('click',function(){
  elHead.classList.toggle('left')
  }); */

  return (
    <section>
      <h2>{page}</h2>
      <div className="flexbox01">
        {arr.map((data, k) => {
          console.log(data);
          return (
            <div className="imgbox01" key={k}>
              <img src={data.url}></img>
              <p>{data.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
