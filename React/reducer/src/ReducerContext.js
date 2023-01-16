import { createContext, useReducer, useState } from "react";
export const AppC = createContext(null);

const reducerFn = (state, action) => {
  switch (action.type) {
    case "plus":
      console.log("더하기");
      console.log(state, data);
      return state + Number(action.value);
    case "minus":
      console.log("빼기");
      return state - Number(action.value);
    default:
      return state;
  }
};

const ReducerContext = ({ bbb }) => {
  const [data, dispatch] = useReducer(reducerFn, 0);

  return <AppC.Provider value={{ data, dispatch }}>{bbb}</AppC.Provider>;
};

export default ReducerContext;
