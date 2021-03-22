"use strict";

// let values = [10, 20, 30];

// Array.prototype.music = function() { 
//     return '음악';
// };

// Object.prototype.sports = function() {
//     return "스포츠";
// };

// for(var key in values) {
//     console.log(key, values[key]);
// };

// console.log("<<<for-of>>>");

// for of 에서는 prototype에 연결 된 프로퍼티가 열거되지 않는다.
// for(var value of values) {
//     console.log(value);
// }

let sports = {
    soccer: '축구',
    baseball: '야구'
};

let keyList = Object.keys(sports);

for(var key of keyList) {
    console.log(key, sports[key]);
}

// 거듭 제곱 연산자
console.log(3**2);
console.log(3**3);
console.log(Math.pow(3,3));