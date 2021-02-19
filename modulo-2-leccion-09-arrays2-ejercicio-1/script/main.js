"use strict";
//1 declarando la funcion como se llama y que hace//
function get100Numbers() {
  let numbers = [];

  for (let i = 1; i < 101; i++) {
    numbers.push(i);
  }
  return numbers;
}
//2 para que empiece a trabajar hay que llamarla//
const result = get100Numbers();
console.log(result);
