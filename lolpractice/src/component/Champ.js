import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Champ.scss";

const Champ = (props) => {
  let name = useParams();
  console.log(name, "qweqwe");
  const dataRef = useRef();
  const aaa = useRef();
  const [test2, setTest2] = useState();
  const [test3, setTest3] = useState();
  const [skilldata, setSkilldata] = useState();
  console.log(aaa.current, "asdsadsadsdsdsd");
  //하나의 state 로 넣어서 뿌려주기<<<<<<<<<<<<<<<

  const ChampName = name.name;
  const cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"; //챔프 url
  const spellUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/"; //스킬 url
  const passiveUrl =
    "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/"; //패시브 url
  const splashUrl =
    "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"; //일러스트 url
  console.log(cmpUrl);

  function Champion(ChampData) {
    console.log(ChampData, "2134123");
    dataRef.current = [ChampData.data];
    let datas = dataRef.current[0];
    console.log(datas[ChampName], "챔프 데이터");

    const splash = splashUrl + datas[ChampName].id + "_0.jpg";
    aaa.current = splash;
    setTest3(datas[ChampName]);
    console.log(datas[ChampName].spells[0].description, "스킬 설명");
    console.log(datas[ChampName].spells[0].name, "스킬 이름");
    console.log(datas[ChampName].spells[0].cooldownBurn, "스킬 쿨타임");
    console.log(datas[ChampName].spells[0].costBurn, "소모값");
    console.log(datas[ChampName].spells[0].rangeBurn, "스킬 범위");
    const spelldata = datas[ChampName].spells;
    console.log(spelldata, "asdsda");
    setSkilldata(spelldata);
    console.log(skilldata, "스테이트");
    console.log(test3,"방금쓴거a")

    const baby = () =>{
      skilldata && skilldata.map((obj,key)=>{
          <>
            <h4>스킬이름: {obj.name}</h4>
            <p>쿨타임: {obj.cooldownBurn}</p>
            <p>소모: {obj.costBurn}</p>
            <p>범위: {obj.rangeBurn}</p>
          </>
      })
    }
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
    <>
      <section className="champbox02">
        <div className="cmpimgBack">
          <img className="frontimg" src={`${aaa.current && aaa.current}`}></img>
          <img className="backimg" src={`${aaa.current && aaa.current}`}></img>
        </div>
        <ul>
          <li>
            <p>{test3?.name}</p>
            <p>{test3?.title}</p>
            <img src={`${cmpUrl}${test3?.image.full}`}></img>
          </li>
          <div className="textbox01">
            <span>{test3?.lore}</span>
          </div>
        </ul>
      </section>

        <h2>스킬</h2>
      <section className="champbox03">
        <div className="skillbox01">
          <div className="skillbox02">
            <img src={`${passiveUrl}${test3?.passive.image.full}`}></img>
            <p>{test3?.passive.name}</p>
          </div>
          {skilldata &&
            skilldata.map((obj, key) => {
              return (
                <div className="skillbox02">
                  <img onClick={baby} src={`${spellUrl}${obj.image.full}`}></img>
                  <p>{obj.name}</p>
                </div>
              );
            })}
        </div>
        <div className="textbox01">
        <div className="textbox02">
            {/* <h4>스킬이름: {test3?.spells[0].name}</h4>
            <p>쿨타임: {test3?.spells[0].cooldownBurn}</p>
            <p>소모: {test3?.spells[0].costBurn}</p>
            <p>범위: {test3?.spells[0].rangeBurn}</p> */}
        </div>
        <span>{test3?.spells[0].description}</span>

        </div>
      </section>
    </>
  );
};

export default Champ;
