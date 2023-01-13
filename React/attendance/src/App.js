import { useState } from "react";
import "./App.scss";
import { MyContext } from "./Context";
import List from "./List";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <MyContext.Provider value={{ data: data, setData, setData }}>
        <List></List>
      </MyContext.Provider>
    </div>
  );
}

export default App;
