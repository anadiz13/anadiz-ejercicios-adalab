"use strict";
const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

// TÚ CÓDIGO AQUÍ
//enunciado: PINTAR EN PANTALLA LOS NOMBRES DE LAS PROMOS//

const resultElement = document.querySelector(`.js-result`);
function paintPromos() {
  let htmlCode = ""; //SE CREA AFUERA PORQUE COMO SE INICIALIZA UNA VARIABLE DONDE VOY ACUMULANDO COSAS, PORQUE SINO AL ENTRAR EN EL BUCLE SE BORRARIA
  htmlCode += `<ul>`; //lo que se pone una sola vez, se pone fuera del FOR.//
  for (const promo of promos) {
    console.log(promo.name);
    htmlCode += `<li>`; // htmlCode += "<li>"; //lo que se pone varias veces, se pone dentro del FOR
    htmlCode += promo.name;
    htmlCode += `</li>`;
  }
  htmlCode += `</ul>`;
  resultElement.innerHTML = htmlCode;
}
paintPromos();
