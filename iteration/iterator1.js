"use strict";

let arrayObj = [];
let result = arrayObj[Symbol.iterator];

console.log(result);

let objectObj = {};
let result2 = objectObj[Symbol.iterator];

console.log(result2);