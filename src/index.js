import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Basic from './Basic';
import Sum from './Sum'
import './index.css';

ReactDOM.render(
  <div>
  <Sum nums={[3,4,5,6,10,20,29]} />
  </div>,
  document.getElementById('root')
);
