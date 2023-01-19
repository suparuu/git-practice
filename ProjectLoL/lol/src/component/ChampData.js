import React from "react";

const ChampData = () => {
  fetch(
    "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json"
  )
    .then((Response) => Response.json())
    .then((Response) => lol(Response))
    .catch((err) => console.error(err));

  function lol(data) {
    let champ = data.data;
    console.log(data);
    console.log(champ);
    let ahri = champ.Ahri.image;
    console.log(ahri.full);
    let ahriImg = ahri.full;
    let cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";

    console.log(cmpUrl + ahriImg);
    let aaa = cmpUrl + ahriImg;
    function champName() {
      for (const name of Object.keys(champ)) {
        let champBoximg = champ[name].image.full
          console.log(champBoximg,"boximg")
          let boximg = cmpUrl + champBoximg;
      }

  }//챔피언 사진 이름 뿌린작업
  champName();
  }

  return (
    <section>
        <div className="champbox">
          <img src=""></img>
          <p></p>
        </div>
    </section>    

  );
};

export default ChampData;
