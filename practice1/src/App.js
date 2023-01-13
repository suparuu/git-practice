import { useEffect, useRef, useState} from 'react';
import { MyContext } from './MyContext';
import './App.scss';
import Insert from './comp/Insert';
import List from './comp/List';



function App() {
  //todolist 프로젝트 생성
  //sass
  const [data,setData] = useState([]),
        [todoNum, setTodoNum] = useState(0),
        [type,setType] = useState('insert');
        
  const add = (value)=>{
    setData([...data,value]);
    setType('insert')
  };
  
  const remove = (n)=>{
      let removeData = data.filter((obj)=>obj.num !== n)
      setData(removeData);
  };

  const update = (idx)=>{
    if(window.event.target.tagName !== 'BUTTON'){
      let dataCopy = data.map((obj)=>{
        if(obj.num==idx){
          obj.checked = !obj.checked;
        }
        return obj;
      })
      setData(dataCopy);
    }
  }

  const modify = (n)=>{
    setType('modify');
  }



  useEffect(()=>{
    let count = data.filter((obj)=>obj.checked===false).length;
    console.log(count)
    setTodoNum(count)
  },[data])
  


  return (
    <div className="App">
      <article>
        <MyContext.Provider value={{type:[type,setType],data:data, setData:setData, todoNum:todoNum, remove:remove, update:update, add:add}}>
          <List >
          {/* data={data} todoNum={todoNum} remove={remove} update={update} add={add} */}
            <Insert />
          </List>
        </MyContext.Provider>
      </article>
    </div>
  );
}

export default App;
