"use strict";
//Crear una función que reciba por parámetro un número y devuelva true si es par y false si es impar.//

function parImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`es par`);
  } else {
    console.log(`es impar`);
  }
}
parImpar(30);
