import {
  useReducer,
  createContext,
  useState,
  useRef,
  useEffect,
  useParams,
} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Champ from "./Champ";
import "../css/Main.scss";

const Main = () => {
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
    const champ = test.data;
    const ChampUrl =
      "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";
    //console.log(Object.keys(champ), "obj"); //챔피언 이름

    const ChampName = [];
    for (let name in champ) {
      ChampName.push({ en: name, kr: champ[name].name });
    }

    /* console.log(ChampName, "챔프 영문이름"); */

    console.log(test);
    setTest(ChampName);
  }
  /* console.log("main", test); */

  return (
    <section className="champbox01">
      {test &&
        test.map((obj, key) => {
          return (
            <Link to={`/Champ/${obj.en}`}>
                <div className="imgbox01">
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${obj.en}.png`}
                  ></img>
                  <span>{[obj.kr]}</span>
                </div>
            </Link>
          );
        })}
    </section>
  );
};

export default Main;
