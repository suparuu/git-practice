import {useEffect} from "react";

const Ex = ({ test }) => {
    useEffect(()=>{
        fetch(`http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion/${test.en}.json`)
          .then((Response) => Response.json())
          .then((Response) => Champion(Response))
          .catch((err) => console.error(err));
      },[])
  console.log(test);
  function Champion(){



  }

  return <div>Ex</div>;
};

export default Ex;
