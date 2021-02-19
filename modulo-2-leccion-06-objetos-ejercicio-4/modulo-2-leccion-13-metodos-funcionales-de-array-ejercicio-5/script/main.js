"use strict";

const users = [
  { name: "María", isPremium: false, pin: 2389 }, 
  //Elemento(userElement/pepino) {nombre_propiedad1: valor propiedad1, ...}
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];
const pinNumber = users.find((userElement) => userElement.pin === 5232); //dame el ELEMENTO que lo cumple
/*pseudocodigo
const pinNumberClassic = users.find(
  for (const userElement of users) {
    if (userElement.pin === 5232) {
      return userElement;
    }
  }
  return -1;  
);*/
const userName = users.find((userElement) => userElement.name === "María");
console.log(userName);
//( cada elemento del array => elemento del array.atributo con su condicion)
console.log("pinNunmber: " + pinNumber);
const userIndexToDelete = users.findIndex((user) => user.pin === 5232); //dame la POSICION del elemento que lo cumple
console.log("userIndexToDelete: " + userIndexToDelete);
users.splice(userIndexToDelete, 1); //splice(posicionDelElementoAEliminar, cuantosEliminoAPartir deAhi)
console.log(users);

funtion pepita(work){
  if(work.pin === 5232){

  }

}