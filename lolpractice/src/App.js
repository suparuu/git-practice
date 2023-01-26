import "./App.css";
import { useReducer, createContext, useState, useRef, useEffect } from "react";
import Champ from "./Champ";
import Main from "./Main";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  fetch("http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json")
  .then((Response) => Response.json())
  .then((Response) => lol(Response))
  .catch((err) => console.error(err));
  /* useEffect(()=>{
    },[]) */
    const [test,setTest] = useState();
    function lol(data) {

      useEffect(()=>{
        let champ = data.data;
        setTest(champ)

      },[])
    console.log(test);
    let atrox = "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/Aatrox.json"
    let cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";
    let cmpData = "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/Yuumi.json";
    console.log(champ, "챔프데이터");
    console.log(cmpData, "유미정보");
    console.log(atrox, "아트록스정보")

    //챔프 역할군 나누는 액션
    const reducerFn = (state, action) => {
      switch (action.type) {
        case "Fighter":
          return state;
        case "Mage":
          return state;
        case "Tank":
          return state;
        case "Marksman":
          return state;
        case "Assassin":
          return state;
        case "Support":
          return state;
      }
    };

    /* const reducerChamptype = () => {
      const [data, dispatch] = useReducer(reducerFn, 0);
      
    }; */
  }

  return (
    <BrowserRouter>
    <section>
      <Link to="/">메인으로</Link>
      <button>Fighter</button>
      <Link to='/Champ'>Mage</Link>
      <button>Tank</button>
      <button>Marksman</button>
      <button>Assassin</button>
      <button>Support</button>
    </section>

    <section>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Champ" element={<Champ />}></Route>
      </Routes>
    </section>
    </BrowserRouter>
    
  );
}

export default App;
