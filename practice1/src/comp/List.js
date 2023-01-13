import React,{useContext} from 'react';
import { MyContext } from '../MyContext';
import Item from './Item'

const List = ({children}) => {
  const {update,data,remove,todoNum} = useContext(MyContext);
  

  return (
    <>
        <h1>Todolist</h1>
        <p>할일 {todoNum}개 남음</p>
        <ul className='list'>
          {
            data && data.map((obj,key)=>{
              return <Item obj={obj} key={key} />
            })
          }
        </ul>
        {children}
    </>
  )
}

export default List