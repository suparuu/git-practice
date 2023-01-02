import React from 'react'
import {Link} from 'react-router-dom';
import Sub2 from './Sub2';


const Main = () => {
  return (
    <div>
        Main<br/>
        <Link to="/sub1">sub1 컴포넌트로 이동</Link>
        </div>
  )
}

export default Main