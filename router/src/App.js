import './Style.scss';
import Main from './component/Main'
import Sub1 from'./component/Sub1'
import Sub2 from'./component/Sub2'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <header>
      <Link to='/'>HOME</Link>
      <Link to='/sub1/0'>SUB1</Link>
      <Link to='/sub2'>SUB2</Link>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/sub1/:id" element={<Sub1 />}></Route>
        <Route path="/sub2" element={<Sub2 />}></Route>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
