import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Add, { Sub, Div, Mult } from './Calc.js';

ReactDom.render(
  <>
    <App />
    <ol>
      <li>Sum of two number {Add(5, 10)}</li>
      <li>Subtraction of two number {Sub(15, 10)}</li>
      <li>Division of two number {Div(5, 10)}</li>
      <li>Multiplication of two number {Mult(5, 10)}</li>
    </ol>
  </>,
  document.getElementById('root')
);
