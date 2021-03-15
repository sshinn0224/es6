"use strict";

// spread 연산자
let one = [11, 12];
let two = [21, 22];

let spreadObj = [51, ...one, 52, ...two];

console.log(spreadObj);
console.log(spreadObj.length);

let spreadObj2 = [..."music"];

console.log(spreadObj2);

const values = [10,20,30,40];

get(...values);

// 배열 순서대로 3개 까지만 더하는 함수 
function get(one, two, three) {
    console.log(one + two + three);
}

