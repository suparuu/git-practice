import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Champ.scss";

const Champ = () => {
  let name = useParams();
  const dataRef = useRef();
  const Bigimg = useRef();//큰 챔피언 사진 
  const [qwer, setQwer] = useState();//qwer스킬 데이터
  const [skilldata, setSkilldata] = useState();
  console.log(Bigimg.current, "asdsadsadsdsdsd");

  const ChampName = name.name;
  const cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/"; //챔프 url
  const spellUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/"; //스킬 url
  const passiveUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/"; //패시브 url
  const splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"; //일러스트 url

  function Champion(ChampData) {
    dataRef.current = [ChampData.data];
    let datas = dataRef.current[0];
    console.log(datas[ChampName], "챔프 데이터");

    const splash = splashUrl + datas[ChampName].id + "_0.jpg";
    Bigimg.current = splash;
    setQwer(datas[ChampName]);
    console.log(datas[ChampName].spells[0].description, "스킬 설명");
    console.log(datas[ChampName].spells[0].name, "스킬 이름");
    console.log(datas[ChampName].spells[0].cooldownBurn, "스킬 쿨타임");
    console.log(datas[ChampName].spells[0].costBurn, "소모값");
    console.log(datas[ChampName].spells[0].rangeBurn, "스킬 범위");
    console.log(datas[ChampName].passive,"패시브스킬")
    const spelldata = datas[ChampName].spells;
    console.log(spelldata, "asdsda");
    setSkilldata(spelldata);
    console.log(skilldata, "챔피언 스킬 데이터");
    console.log(qwer,"챔피언 스킬 데이터2 스테이트 함수")

    const baby = () =>{//미완성
        console.log('aaa')
      skilldata && skilldata.map((e,key)=>{
            if(key==key){
          <>
            <h4>스킬이름: {e.name}</h4>
            <p>쿨타임: {e.cooldownBurn}</p>
            <p>소모: {e.costBurn}</p>
            <p>범위: {e.rangeBurn}</p>
          </>
                
            }
      })
    }

    //온클릭 함수 실험
    //자 우리가 해야할것 . 1번째 사진 5개들 onClick 구현 
    //클릭 했을때 값이 바뀌어야함 . 
    //바뀌는 값은 패시브는 패시브내용 . 
    //Q스킬은 Q스킬 내용 으로 바꿔야함  
    //클릭 했을때 , Q스킬이면 ?  Q스킬 내용들 
  }

  const testbtn = () =>{
    console.log('say hello~')
    skilldata && skilldata.map((e,key)=>{//미완성
        console.log(e)
        if(key==0){
            return(
                <>
            <h4>스킬이름: {e.name}</h4>
            <p>쿨타임: {e.cooldownBurn}</p>
            <p>소모: {e.costBurn}</p>
            <p>범위: {e.rangeBurn}</p>
          </>
                )
         
            }
            
  })
}

  useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/${ChampName}.json`//누른 챔피언의 상세 api
    )
      .then((Response) => Response.json())
      .then((Response) => Champion(Response));
  }, []);

  // .catch((err) => console.error(err));

  return (
    <>
      <section className="champbox02">
        <div className="cmpimgBack">
          <img className="frontimg" src={`${Bigimg.current && Bigimg.current}`}></img>
          <img className="backimg" src={`${Bigimg.current && Bigimg.current}`}></img>
        </div>
        <ul>
          <li>
            <p>{qwer?.name}</p>
            <p>{qwer?.title}</p>
            <img src={`${cmpUrl}${qwer?.image.full}`}></img>
          </li>
          <div className="textbox01">
            <span>{qwer?.lore}</span>
          </div>
        </ul>
      </section>

        <h2>스킬</h2>
      <section className="champbox03">
        <div className="skillbox01">
          <div className="skillbox02" onClick={()=>{testbtn()}}>
            <img src={`${passiveUrl}${qwer?.passive.image.full}`}></img>
            <p>{qwer?.passive.name}</p>
          </div>
          {skilldata &&
            skilldata.map((obj, key) => {//qwer데이터 뿌리기 반복문
              return (
                <div className="skillbox02">
                  <img src={`${spellUrl}${obj.image.full}`}></img>
                  <p>{obj.name}</p>
                </div>
              );
            })}
        </div>
        <div className="relativebox">
            <div className="passivebox01">
            <div className="textbox02 ">
            <h4>스킬이름: {qwer?.passive.name}</h4>
        </div> 
        <div className="textbox03">
        <span>{qwer?.passive.description}</span>
        </div>
            </div>

        {skilldata &&
            skilldata.map((obj) => {//qwer데이터 뿌리기 반복문
              return (
                <div className="textbox01">
                <div className="textbox02 ">
            <h4>스킬이름: {obj.name}</h4>
            <p>쿨타임: {obj.cooldownBurn}</p>
            <p>소모: {obj.costBurn}</p>
            <p>범위: {obj.rangeBurn}</p>
        </div> 
        <div className="textbox03">
            
        <span>{obj.description.replaceAll("<br>"," ")}</span>
        </div>
        </div>
              );
            })}
        {/* <div className="textbox01">
        <div className="textbox02 ">
            <h4>스킬이름: {qwer?.spells[0].name}</h4>
            <p>쿨타임: {qwer?.spells[0].cooldownBurn}</p>
            <p>소모: {qwer?.spells[0].costBurn}</p>
            <p>범위: {qwer?.spells[0].rangeBurn}</p>
        </div>
        <span>{qwer?.spells[0].description.replaceAll("<br>"," ")}</span>
        </div> */}

        </div>
      </section>
      <section className="skinbox">

      </section>
    </>
  );
};

export default Champ;
