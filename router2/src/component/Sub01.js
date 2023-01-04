import React from "react";

const Sub01 = () => {
  function fn() {}

  return (
    <section>
      <h2>ghjgg</h2>

      <div className="flexbox">
        <button onClick={fn}>Movies</button>
        <button onClick={fn}>Music</button>
        <button onClick={fn}>Apps</button>
        <button onClick={fn}>Software</button>
      </div>
      <div>
        <div className="flexbox02">
          <img src="./cubana.jpg" alt="df" />
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Sub01;
