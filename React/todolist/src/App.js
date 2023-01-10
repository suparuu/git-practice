import './App.scss';
import {useState, useRef, useEffect} from 'react';
import $ from 'jquery';

function App() {
  const [data,setData] = useState([]),
        [todoNum, setTodoNum] = useState(0),
    elInput = useRef(),
    elItems = useRef([]),
    count = useRef(0);
  useEffect(()=>{
    setTodoNum(data.length)

  },[data])
  const add = (e)=>{
    //input값 받아서 data변수에 넣어주는 일 
    //num:1 , todo:리액트 공부하기
    e.preventDefault();
    let value = {num:++count.current, todo:elInput.current.value}
    setData([...data,value]);
    elInput.current.value = '';
    elInput.current.focus();
    update();
  };
  
  const remove = (n)=>{
    let removeData = data.filter((obj)=>obj.num !== n)
    setData(removeData)
    console.log('asd')
  };
  const state = (e)=>{
    if(e.target.tagName != 'button'){
      e.target.classList.toggle('active');
      update();
    }
  };
  const update = ()=>{
    console.log(elItems.current)
    let count = elItems.current.filter((item)=>item&&item.className != 'active').length;
    setTodoNum(count);
  }

  useEffect(update,[data]);
  return (
    <div className="App">
      <article>
        <h1>Todolist</h1>
        <p>할일 {todoNum}개 남음</p>
        <ul className="list">
          {
            data && data.map((obj,key)=>{
              return(
              <li ref={(el)=>elItems.current[key]=el} onClick={state} key={obj.num}>
              {obj.todo}
              <button onClick={()=>remove(obj.num)}>삭제</button>
              </li>
              )
            })
          }
        </ul>
        <div className="write">
          <form onSubmit={add}>
          <input ref={elInput} type="text" name="w" placeholder="할 일을 입력하세요"></input>
          <input type="submit" value="저장"></input>
          </form>
        </div>
      </article>
    </div>
  );
}

export default App;
