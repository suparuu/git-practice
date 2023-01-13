import React, { useContext, useEffect, useRef, useState } from "react";
import AttContext from "./AttContext.js";

const Insert = () => {
  const { data, setData, type, setType } = useContext(AttContext);
  const [ip, setIP] = useState("");
  const seleter = useRef();

  const popup = () => {
    seleter.current.classList.add("active");
  };

  const save = () => {
    let value;
    if (type[0]) {
      console.log("aaaa");
      value = [...data, { num: Date.now(), name: ip }];
    } else {
      value = data.map((obj) => {
        if (type[1] == obj.num) {
          obj.name = ip;
        }
        return obj;
      });
    }

    setData(value);
    setIP("");
    setType(true, 0);
  };

  const close = (e) => {
    if (e.target.classList.contains("pop"))
      seleter.current.classList.remove("active");
  };

  useEffect(() => {
    if (type[0] == false) popup();
  }, [type]);

  return (
    <>
      <aside>
        <button onClick={popup}>+</button>
      </aside>

      <div className="pop" ref={seleter} onClick={close}>
        <article>
          <h2>참여자등록</h2>
          <input
            type="text"
            value={ip}
            onChange={(e) => setIP(e.target.value)}
          />
          <button onClick={save}>저장하기</button>
        </article>
      </div>
    </>
  );
};

export default Insert;
