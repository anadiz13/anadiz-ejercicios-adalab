"use strict";
//caja de texto donde escribimos el nombre de un personaje (o parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado con los personajes que coinciden con la búsqueda indicando su nombre y género.//
const user = document.querySelector(`.js-user`);
const button = document.querySelector(`.js-search`);
const list = document.querySelector(`.js-listelement`);

function handleTakeApi() {
  const inputValue = user.value;
  console.log(inputValue);
}
