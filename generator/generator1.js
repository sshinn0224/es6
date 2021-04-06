"use strict";

// sample
// generator #1

// function* sports(one, two){ 
//     console.log("함수 실행");
//     yield one + two;
// };
// console.log(typeof sports);

// let genObj = sports(1,2);
// console.log(typeof genObj);
// console.log(genObj);
// console.log(genObj.next());

// function* generatorSample() {
//     yield 1;
//     yield 2;
//     return 3;
// };

// let gen = generatorSample();
// console.log(typeof gen);
// console.log(gen);
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// generator #2 function 표현식

// let sports = function* (one, two) {
//     console.log("함수 블록");
//     yield one + two;
// };

// let genObj = sports(10,20);
// console.log(genObj.next());
// console.log(genObj);


// Generator #3 : GeneratorFunction() 제네레이터 함수 생성
// let GenConst = Object.getPrototypeOf(function*(){}).constructor;
// let sports = new GenConst(
//     "one","two",
//     "console.log('함수블록'); yield one + two"
// );

// let genObj = sports(3,4);
// console.log(genObj.next());

// generator #5 제네레이터 함수 실행, 멈춤
// function* sports(one) {
//     let two = yield one;
//     let param = yield two + one;
//     yield param + one;
// }
// let generatorObj = sports(10);

// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next(20));

// generator yield2 
function* sports(one) {
    yield one;
    let check = 10;
}
let genObj = sports(10);

console.log(genObj.next());
console.log(genObj.next());