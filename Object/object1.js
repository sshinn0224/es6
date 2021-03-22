"use strict";

// #1 Object에 같은 Key 사용

// let sameKey = {one: 1, one:2 };
// console.log(sameKey);

//#2 변수 이름으로 값 설정

// let one = 1, two = 2;
// let values = {one, two};
// console.log(values);

// #3 Object에 Function  작성 
// let obj = {
//     getTotal(param) {
//         return param + 123;
//     }
// };
// console.log(obj.getTotal(400));

// #4 디스크립터 - get
// var obj = {};

// Object.defineProperty(obj, 'book', {
//     get: function() {
//         return "책";
//     }
// });

// console.log(obj.book);

// #5 디스크립터 - set

// var obj = {};

// Object.defineProperty(obj, "item", {
//     set: function(param) {
//         this.sports = param;
//     }
// });

// obj.item = "야구";
// console.log(obj.sports);
// console.log(obj.item);

// #6 디스크립터 - getter ES6
// let obj = {
//     value: 123,
//     get getValue() {
//         return this.value;
//     }
// };

// console.log(obj.getValue);

// #7 디스크립터 - setter ES6
// let obj = {
//     set setValue(param) {
//         this.param = param;
//     }
// };

// obj.setValue = 2223;
// console.log(obj.param);

// obj.setValue = 1111;
// console.log(obj.param);

// #8 is() 값과 값 타입을 비교한다
console.log("1: " + Object.is(1, "1"));
console.log("2: " + Object.is(NaN, NaN), NaN === NaN);
console.log('3: ' + Object.is(0, -0), 0 === -0);
console.log("4: " + Object.is(-0, 0), -0 === 0);
console.log('5: ' + Object.is(-0 , -0), -0 === -0);
console.log('6: ' + Object.is(NaN, 0/0), NaN === 0/0);
console.log('7: ' + Object.is(null, null) , null === null);
console.log('8: ' + Object.is(undefined, null), undefined === null);