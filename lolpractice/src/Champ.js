import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const Champ = (props) => {
  // console.log({props},'2222')
  let name = useParams();
  // console.log(name,'이름')
  const dataRef = useRef();
  const aaa = useRef();
  const [ee, setEe] = useState();
  useEffect(() => {
    setEe(name);
  }, []);
  // console.log(dataRef, "1114");

  function Champion(ChampData) {
    // console.log(name.name);
    
    let asdfg = name.name;
    console.log(asdfg)
    // console.log(ChampData.data, "11111");
    // console.log(dataRef.current);
    dataRef.current = [ChampData.data];
    console.log(dataRef.current[0], "최종");
    let abc = dataRef.current[0];
    console.log(abc[asdfg]);
    aaa.current = abc[asdfg]
    console.log(aaa)
    
    // console.log(abc[Ahri]);

    // console.log(ChampData.data.first_key);
    // console.log(dataRef.current[0].first_key)

    // let AA = ChampData;
    // console.log(AA);
    //console.log(ChampData.data);
    //console.log(ChampData)
  }

  // console.log(ee);
  /*   console.log(name)
  console.log(test) */

  /*      const [img, setImg] = useState();
  const [name, setName] = useState();
  const [lore, setLore] = useState();  */

  fetch(
    `http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/Ahri.json`
  )
    .then((Response) => Response.json())
    .then((Response) => Champion(Response));
  // .catch((err) => console.error(err));

  /* function Yuumi(data) {
    console.log(data.data.Yuumi.lore);

    let YuumiData = data.data.Yuumi;
    console.log(YuumiData, "유미정보");
    let skill = YuumiData.spells;
    console.log(skill, "유미스킬");
    console.log(YuumiData.image.full);
    let Img = YuumiData.image.full;
    let cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";

    console.log(cmpUrl + Img);
    let yuyu = cmpUrl + Img;
    setImg(yuyu); //유미이미지

    console.log(YuumiData.name);
    setName(YuumiData.name); //유미이름
    console.log(YuumiData.lore);
    setLore(YuumiData.lore); //유미내용
  }*/

  return (
    <ul>
      <li>
        <p>1{aaa.current?.lore}</p>
        {/* <img src={img}></img> */}
        <span>내용</span>
      </li>
    </ul>
  );
};

export default Champ;
