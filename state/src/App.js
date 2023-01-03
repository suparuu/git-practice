import "./Style.scss";
import Main from "./aaa/Main";
import Sub01 from "./aaa/Sub01";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  let [idx,setIdx] = useState(0);

  let nav = (n)=>{
    /* let head = document.querySelectorAll("header a");
    head[idx].classList.remove('active')
    head[n].classList.add('active');
    let idx = n; */
    setIdx(n);
  }
  

  return (
    <BrowserRouter>
      <header>
        <Link to="/" className={idx==0 && 'active'} onClick={()=>nav(0)}>HOME</Link>
        <Link to="/Sub01" className={idx==1?'active':''} onClick={()=>nav(1)}>Product</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Sub01" element={<Sub01 />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
