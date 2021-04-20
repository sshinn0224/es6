"use strict"

// #1. new WeakSet() : WeakSet 인스턴스 생성 - WeakSet의 value 는 Object만 들어간다.
// let newString = new String("문자열");
// let newNumber = new Number(12345);
// const newWeakSet = new WeakSet([newString, newNumber]);

// try {
//     new WeakSet(["ABC", 345]);
// } catch(e) {
//     console.log("object 이외 지정 불가");
// }