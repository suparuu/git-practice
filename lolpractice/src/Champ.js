import { useState, useRef } from "react";

const Champ = () => {
  const [img, setImg] = useState();
  const [name,setName] = useState();
  const [lore,setLore] = useState();

  fetch(
    "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/Yuumi.json"
  )
    .then((Response) => Response.json())
    .then((Response) => Yuumi(Response))
    .catch((err) => console.error(err));

  function Yuumi(data) {
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
    setImg(yuyu);//유미이미지

    console.log(img)
    console.log(YuumiData.name)
    setName(YuumiData.name);//유미이름
    console.log(YuumiData.lore)
    setLore(YuumiData.lore);//유미내용
  }

  return (
    <ul>
      <li>
        <p>{name}</p>
        <img src={img}></img>
        <span>{lore}</span>
      </li>
    </ul>
  );
};

export default Champ;
