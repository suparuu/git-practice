import React,{useContext,useRef} from 'react';
import { MyContext } from '../MyContext';

const Insert = () => {
  const {add} = useContext(MyContext);
  const count = useRef(0),
        elInput = useRef();

  const submit = (e)=>{
    e.preventDefault();    
    let value = {num:count.current++, todo:elInput.current.value, checked:false}
    add(value);
    elInput.current.value = '';
    elInput.current.focus();
  }
  return (
    <div className='write'>
        <form onSubmit={submit}>
         
            
              <input ref={elInput} type="text" name="w" placeholder='할 일을 입력하세요.'/>
              <input type="submit" value="저장"/>
            
          
        </form>
    </div>
  )
}

export default Insert