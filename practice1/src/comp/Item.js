import React,{useContext,useRef} from 'react';
import { MyContext } from '../MyContext';

const Item = ({obj}) => {
  const {type, add, remove, update} = useContext(MyContext);
  const modify = ()=>{
    type[1]('modify');
  }
  return (
    <li onClick={()=>update(obj.num)} className={obj.checked ? 'active':''} >
        {obj.todo}
        <button onClick={()=>modify(obj.num)}>수정</button>
        <button onClick={()=>remove(obj.num)}>삭제</button>
    </li>
  )
}

export default Item