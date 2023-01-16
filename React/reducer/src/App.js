import './App.css';
import {useReducer, useState, useContext} from 'react';
import  ReducerContext from "./ReducerContext";
import  Textbox from "./Textbox";


/* const initState = {
  count:2,
  list:[
    {id:0, name:'개같다'}
  ]
} */


function App() {                     /* 일할장소,값 */

  return (

    <div className="App">         {/* 인자값=>action */}
    <ReducerContext>
    <Textbox></Textbox>
    </ReducerContext>
    </div>

  );
}

export default App;
