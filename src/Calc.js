import React from 'react';

function Add(a, b) {
  return a + b;
}

function Sub(a, b) {
  return a - b;
}

function Div(a, b) {
  return (a / b).toFixed(2);
}

function Mult(a, b) {
  return a * b;
}

export default Add;
export { Sub, Div, Mult };
