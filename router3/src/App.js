import "./Style.scss";
import { useState, useRef } from "react";
import Main from "./component/Main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  let [ccc, setCcc] = useState(0);
  let elBtn = useRef();
  let bbb = useRef([0, 1, 2, 3]);
  
  console.log(elBtn.current);
  let navFn = function () {
    console.log(bbb.current);
    elBtn.current.classList.toggle("left");
    setCcc(200) 
  };

  return (
    <BrowserRouter>
      <header ref={elBtn}>
        <button ref={(el) => bbb.current.push(el)} onClick={navFn}>
          {ccc}
        </button>
        <Link to="/Music">MUSIC</Link>
        <Link to="/Movies">MOVIES</Link>
        <Link to="/Apps">APPS</Link>
        <Link to="/Software">SOFTWARE</Link>
      </header>
      <main>
        <Routes>
          <Route path="/:page" element={<Main />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
