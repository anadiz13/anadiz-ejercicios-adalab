"use strict";
//Podemos jugar añadiendo parámetros a la URL del tipo clave=valor, siempre después de character ? y separados por //
function getEmoji() {
  fetch("https://api.rand.fun/number/integer")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);
