import './App.css';
import {useState, useRef} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Top from './component/Top';
import Jungle from './component/Jungle';
import Mid from './component/Mid';
import Bottom from './component/Bottom';
import Supporter from './component/Supporter';
import ChampData from './component/ChampData';


function App() {


  return (
    <BrowserRouter>
    <header>
      <Link to='/'>HOME</Link>
      <Link to='/ChampData'>ChampData</Link>
      <Link to="/Mid">Mid</Link>

    </header>
    <main> 
    <Routes>
      <Route path="/ChampData" element={<ChampData/>}></Route>
      <Route path="/Mid" element={<Mid/>}></Route>
    </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App;
