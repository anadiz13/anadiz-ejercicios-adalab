"use strict";

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const longName = users.find((name) => name.length > 5);

console.log(longName);

const index = names.findIndex((name) => name.length > 5);

console.log(index);
const users = name.splice(4, 1);
