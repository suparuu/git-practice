import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Champ.scss";

const Champ = (props) => {
  let name = useParams();
  const dataRef = useRef();
  const aaa = useRef();
  const [test2, setTest2] = useState();
  const [test3, setTest3] = useState();
  console.log(aaa.current, "asdsadsadsdsdsd");
  //하나의 state 로 넣어서 뿌려주기<<<<<<<<<<<<<<<

  const ChampName = name.name;
  const cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"; //챔프 url
  const spellUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/"; //스킬 url
  const passiveUrl =
    "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/"; //패시브 url
  const splashUrl =
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"; //일러스트 url






  function Champion(ChampData) {
    dataRef.current = [ChampData.data];
    let datas = dataRef.current[0];
    console.log(datas[ChampName], "이거 되는거임 ");


    const splash = splashUrl + datas[ChampName].id + "_0.jpg";
    aaa.current = splash;
    setTest3(datas[ChampName]);


  }









  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/${ChampName}.json`
    )
      .then((Response) => Response.json())
      .then((Response) => Champion(Response));
  }, []);

  // .catch((err) => console.error(err));

  return (
    <section className="champbox02">
    <div className="cmpimgBack" /* style={{ backgroundImage: `url(${aaa.current && aaa.current})` }} */>
    {/* <div className="cmpimgBack" style={{ backgroundImage: `url(${aaa.current && aaa.current})` }}> */}
      <img className="frontimg" src={`${aaa.current && aaa.current}`}></img>
      <img className="backimg" src={`${aaa.current && aaa.current}`}></img>
    </div>
      <ul>
        <li>
          <p>{test3?.name}</p>
          <p>{test3?.title}</p>
          <img src={`${cmpUrl}${test3?.image.full}`}></img>
          <span>{test3?.lore}</span>
        </li>
      </ul>
    <div className="skillbox">
        <img src={`${passiveUrl}${test3?.passive.image.full}`}></img>
        <img src={`${spellUrl}${test3?.spells[0].image.full}`}></img>
        <img src={`${spellUrl}${test3?.spells[1].image.full}`}></img>
        <img src={`${spellUrl}${test3?.spells[2].image.full}`}></img>
        <img src={`${spellUrl}${test3?.spells[3].image.full}`}></img>
    </div>
    </section>
  );
};

export default Champ;
