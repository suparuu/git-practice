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
      <Link to='/'>MAIN</Link>
      <Link to='/ChampData'></Link>

    </header>
    <main> 
    <Routes>
      <Route path="/ChampData" element={<ChampData/>}></Route>
    </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App;
