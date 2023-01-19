import "./App.css";
import { useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tank from "./component/Tank";
import Assassin from "./component/Assassin";
import Mage from "./component/Mage";
import Marksman from "./component/Marksman";
import Support from "./component/Support";
import ChampData from "./component/ChampData";



function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">HOME</Link>
        <Link to="/ChampData">ChampData</Link>
        <Link to="/Mage">Mid</Link>
      </header>
      <main>
        <Routes>
          <Route path="/ChampData" element={<ChampData />}></Route>
          <Route path="/Mage" element={<Mage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
