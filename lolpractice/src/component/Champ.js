import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../css/Champ.scss';


const Champ = (props) => {
    
    let name = useParams();
    const dataRef = useRef();
    const aaa = useRef();
    const [test2,setTest2] = useState();
    
    const [lore, setLore] = useState();//챔피언 설명
    const [krname, setKrname] = useState();//챔피언 한글 이름
    const [qspell,setQspell] = useState();//챔피언 Q스킬
    const [wspell,setWspell] = useState();//챔피언 W스킬
    const [espell,setEspell] = useState();//챔피언 E스킬
    const [rspell,setRspell] = useState();//챔피언 R스킬
    const [passive,setPassive] = useState();//챔피언 패시브
    const [splash,setSplash] = useState();//챔피언 일러스트
    const [full,setFull] = useState();//챔피언 조그만한 이미지
    const [imgstyle,setImgstyle] = useState();//챔피언 백그라운드 이미지
  //하나의 state 로 넣어서 뿌려주기<<<<<<<<<<<<<<<
  console.log(dataRef)

  const ChampName = name.name;

  function Champion(ChampData) {
    
    dataRef.current = [ChampData.data];
    let datas = dataRef.current[0];
    console.log(datas[ChampName],'이거 되는거임 ');

    const CmpData = datas[ChampName] 
    console.log(CmpData);
    console.log(CmpData.image,'챔프 이미지들')
const cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";//챔프 url
const spellUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/spell/";//스킬 url
const passiveUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/passive/";//패시브 url
const splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";//패시브 url

console.log(CmpData.name)

const CmpImg1 = cmpUrl + CmpData.image.full;
const skill = CmpData.spells;
const lore = CmpData.lore;
const Qskill = spellUrl + skill[0].image.full;//Q스킬
const Wskill = spellUrl + skill[1].image.full;//W스킬
const Eskill = spellUrl + skill[2].image.full;//E스킬
const Rskill = spellUrl + skill[3].image.full;//R스킬
const passive = passiveUrl + ChampName +'_Passive.png'
const passive1 = passiveUrl + CmpData.passive.image.full//패시브
const splash = splashUrl + ChampName + '_0.jpg'

console.log(Qskill,'Q스킬url')
console.log(passiveUrl + ChampName +'_Passive.png')
console.log(passive1,'패시브')
console.log(splash,'챔피언 일러스트')

const cmpimgStyle = {
    "background-image" : `url(${splash})`
}
let dataChamp = [CmpImg1, lore, Qskill, Wskill,
     Eskill, Rskill ,passive1, splash, cmpimgStyle];
     
     setTest2(dataChamp)
     console.log(test2)
         setKrname( CmpData.name)
         setFull(CmpImg1)
         setLore(lore)
         setQspell(Qskill)
         setWspell(Wskill)
         setEspell(Eskill)
         setRspell(Rskill)
         setPassive(passive1)
         setSplash(splash)
         setImgstyle(cmpimgStyle)
    }
    console.log(lore)
useEffect(()=>{
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/${ChampName}.json`
    )
      .then((Response) => Response.json())
      .then((Response) => Champion(Response));

},[])

  // .catch((err) => console.error(err));


return (
     <div className="cmpimgBack" style={imgstyle}>
    <ul>
        <img src={splash}></img>
      <li>
        <p>{krname}</p>
        <img src={full}></img>
        <span>{lore}</span>
      </li>
      <img src={passive}></img>
      <img src={qspell}></img>
      <img src={wspell}></img>
      <img src={espell}></img>
      <img src={rspell}></img>
    </ul>
    </div>   
    );

};

export default Champ;