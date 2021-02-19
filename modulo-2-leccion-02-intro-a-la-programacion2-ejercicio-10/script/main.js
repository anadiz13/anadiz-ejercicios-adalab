'use strict';
//traemos los elementos a constantes
const anaAge = document.querySelector('.anaage');

//preparamos los datos//
const datoComoString=anaAge.innerHTML;
const datoNumero = parseInt(datoComoString);
const totalHours=24;
const totalDays= 365;

//calcular el resultado

const yearsLived = datoNumero * totalHours * totalDays;
//resultado en pantalla

anaAge.innerHTML=`Has vivido ${yearsLived} dias`;
console.log (anaAge);




