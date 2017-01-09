import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Basic from './Basic';
import Sum from './Sum'
// import Counter from './Counter'
// import Timer from './Timer'
import './index.css';
import Boxes from './Boxes'

ReactDOM.render(
  // <div>
  // <Sum nums={[3,4,5,6]} />
  // </div>,
  // <div>
  //   <Counter />
  //    <Counter />
  // </div>
  <div>
    <Boxes />
  </div> ,
  document.getElementById('root')
);
