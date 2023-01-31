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
  const data1 = useRef('0');

  function lolMain(test) {
    const champ = test.data;
    const ChampUrl =
      "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";
    //console.log(Object.keys(champ), "obj"); //챔피언 이름

    const ChampName = [];
    for (let name in champ) {
      ChampName.push({ en: name, kr: champ[name].name });
    }
    console.log(ChampName)
    ChampName.sort(function(a, b) { // 오름차순
    return a.kr < b.kr ? -1 : a.kr > b.kr ? 1 : 0;
  });

    /* console.log(ChampName, "챔프 영문이름"); */

    /* let bbb = (test) =>{
      test.sort(function());
      console.log(aaa,'33')
    }
    
    bbb() */
    console.log([test.data][0]);
    let bbbb = [[test.data][0]];
    console.log(bbbb,'asdasdasdsadsad')
    
    console.log(data1)
    let ccc = data1.current
    ccc = [...data1.current,[test.data][0]]
    console.log(ccc)
    console.log(typeof(bbbb))
    ccc.sort(function(a, b) { // 오름차순
      console.log(a,b,'54번')
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });



  /*   let student = [
      { name : "재석", age : 21},
      { name : "광희", age : 25},
      { name : "형돈", age : 13},
      { name : "명수", age : 44}
  ]
console.log(student)

  student.sort(function(a, b) { // 오름차순
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    // 광희, 명수, 재석, 형돈
  });
  console.log(student) */
  console.log(test)

    
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
