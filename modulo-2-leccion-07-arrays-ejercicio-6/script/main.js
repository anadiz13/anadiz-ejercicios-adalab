"use strict";
/*Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.*/

const movieInput1 = document.querySelector("#movieInput1");
const movieInput2 = document.querySelector("#movieInput2");
const button = document.querySelector("#login-button");
function sendInfo() {
  const iterable = [movieInput1.value, movieInput2.value];
  for (const obra of iterable) {
    console.log(`"A mi tambien me encantó ${obra}"`);
  }
}

button.addEventListener("click", sendInfo);

// constante hace referencia al boton

// Creamos función handler de qué pasa cuando clickeamos el botón

// La constante que recoge el valor que hemos introducido en el input la declaramos una vez hemos pulsado el botón. Esto es importante, si la declaramos arriba debajo de la de button, su valor será el que por defecto tiene el value de un input vacío. --> queremos que el valor se le asigne una vez hemos escrito los libros y pulsado el botón

// Creamos una constante que recoge el primer libro que hemos introducido y otra para el segundo

// Creamos un array que tendrá como elementos los dos libros

// Crear for...of loop que va a mostrar un mensaje por cada libro
