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

// #2. add() : value 추가
// const newWeakSet = new WeakSet();
// let newString = new String("문자열");

// newWeakSet.add(newString);

// let obj = {sports: "스포츠"};
// newWeakSet.add(obj);

// console.log(newWeakSet);

// #3.has() : value 존재 여부
// let newString = new String("문자열");
// const newWeakSet = new WeakSet([newString]);
// console.log(newWeakSet.has(newString));


// #4. delete() : 엘리먼트 삭제
let newString = new String("문자열");
const newWeakSet = new WeakSet([newString]);

console.log(newWeakSet.delete(newString));
console.log(newWeakSet.has(newString));