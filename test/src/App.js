import "./App.css";
import "./test.scss";
import sy from "./test.module.css";

function App() {
  let style = {
    "font-size": "3rem",
    color: "blue",
  };
  return (
    <div className="App">
      <img src="./logo.svg"></img>
      <p style={style}>스타일링 중이빈다😁😍😘😗🥰🤩</p>
      <p className={sy.color}>😛😌😛😛😌😌asdfsdafsdafsaf😌😌😛😛😌</p>
    </div>
  );
}

export default App;
