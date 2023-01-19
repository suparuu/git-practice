import "./App.css";
import { useReducer, createContext } from "react";

function App() {
  fetch(
    "http://ddragon.leagueoflegends.com/cdn/13.1.1/data/ko_KR/champion.json"
  )
    .then((Response) => Response.json())
    .then((Response) => lol(Response))
    .catch((err) => console.error(err));

  function lol(data) {
    let champ = data.data;
    let cmpUrl = "http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/";
    console.log(champ, "챔프데이터");

    const reducerFn = (state, action) => {
      switch (action.type) {
        case "Fighter":
          return state;
        case "Mage":
          return state;
        case "Tank":
          return state;
        case "Marksman":
          return state;
        case "Assassin":
          return state;
        case "Support":
          return state;
      }
    };

    const reducerChamptype = () => {
      const [data, dispatch] = useReducer(reducerFn, 0);
      
    };
  }

  return (


  )
}

export default App;
