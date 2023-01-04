import "./style.scss";
import Main from "./component/Main";
import Sub01 from "./component/Sub01";
import Item from "./component/Item";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/Sub01">MOVIES</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Sub01" element={<Sub01 />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
