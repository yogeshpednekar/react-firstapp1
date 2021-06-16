import React from 'react';
import ReactDom from 'react-dom';
import App, { desg2, myname, desg } from './App';

ReactDom.render(
  <>
    <App />
    <h1>{myname}</h1>
    <h1>{desg}</h1>
    <h1>{desg2}</h1>
  </>,
  document.getElementById('root')
);
