"use strict";

const numbers = [1, 2, 3];
//añadir elememto 1//

const newItem = document.createElement("li");
const newContent = document.createTextNode("1");
newItem.appendChild(newContent);
console.log(newItem);

//añadir elememto 2//

const newOtherItem = document.createElement("li");
const newOtherContent = document.createTextNode("2");
newOtherItem.appendChild(newOtherContent);
console.log(newOtherItem);

//añadir elememto 3//

const newNewItem = document.createElement("li");
const newNewContent = document.createTextNode("3");
newNewItem.appendChild(newNewContent);
console.log(newNewItem);

//console.log( ${newItem} ${newOtherItem} ${newNewItem}`);
