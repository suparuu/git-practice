import AttContext from "./AttContext.js";

import "./App.scss";
import Insert from "./Insert";
import List from "./List";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [type, setType] = useState([true, 0]);

  useEffect(() => {
    setCount(data.length);
  }, [data]);

  return (
    <AttContext.Provider value={{ data, setData, type, setType }}>
      <main>
        <section>
          <h1>출석부</h1>
          <article>
            <h2>참여인원 : {count}명</h2>
            <List />
          </article>
        </section>
        <Insert />
      </main>
    </AttContext.Provider>
  );
}

export default App;
