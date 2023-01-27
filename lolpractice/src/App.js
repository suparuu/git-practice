import "./App.css";
import { useReducer, createContext, useState, useRef, useEffect } from "react";
import Champ from "./Champ";
import Main from "./Main";
import Assassin from "./Assassin";
import Mage from "./Mage";
import Support from "./Support";
import Tank from "./Tank";
import Marksman from "./Marksman";
import Fighter from "./Fighter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Ex from "./Ex";

function App(props) {
  useEffect(() => {
    fetch(
      "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json"
    )
      .then((Response) => Response.json())
      .then((Response) => lolMain(Response))
      .catch((err) => console.error(err));
  }, []);

  const [test, setTest] = useState([]);  
  

  function lolMain(test) {
    console.log(test.data);
    const champ = test.data;
    // updata(champ);

    //

    /* for (let te in champ) {
      fetch(
        `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/${te}.json`
      )
        .then((Response) => Response.json())
        .then((Response) => Champion(Response))
        .catch((err) => console.error(err));

      function Champion(ChampData) {
        console.log(ChampData.data);
        //console.log(ChampData)
      } 
    } */
    /*  champ.map((obj, key) => { */

    /* }); */
    const ChampUrl =
      "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";
    // console.log(Object.keys(champ), "obj"); //챔피언 이름

    const ChampName = [];
    for (let name in champ) {
      ChampName.push({ en: name, kr: champ[name].name });
    }

    // console.log(ChampName, "챔프 영문이름");

    setTest(ChampName);
  }

  //console.log(test);
  const [a, setA] = useState("aaa");
  function lol(data) {}

  return (
    <BrowserRouter>
      <header>
        <Link to="/Main">😀</Link>
        <div>
          <Link to="/Ex">연습</Link>
          <Link to="/Marksman">원거리 딜러</Link>
          <Link to="/Tank">탱커</Link>
          <Link to="/Mage">마법사</Link>
          <Link to="/Assassin">암살자</Link>
          <Link to="/Support">서포터</Link>
          <Link to="/Fighter">전사</Link>
        </div>
      </header>

      <section>
        <Routes>
          <Route
            path="/Ex"
            element={<Ex test={test} setTest={setTest} />}
          ></Route>
          <Route path="/Main" element={<Main />}></Route>
          <Route
            path="/Champ/:name"
            element={<Champ test={{test}} setTest={setTest} />}
          ></Route>
          <Route path="/Marksman" element={<Marksman value={test} />}></Route>
          <Route path="/Tank" element={<Tank value={test} />}></Route>
          <Route path="/Mage" element={<Mage value={test} />}></Route>
          <Route path="/Assassin" element={<Assassin value={test} />}></Route>
          <Route path="/Support" element={<Support value={test} />}></Route>
          <Route path="/Fighter" element={<Fighter value={test} />}></Route>
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
