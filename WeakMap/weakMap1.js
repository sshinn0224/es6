"use strict"

// #1. new WeakMap() : WeakMap 인스턴스 생성
// const emptyWeakMap = new WeakMap();

// let obj = {};

// const newWeakMap = new WeakMap([
//     [obj , "오브젝트"]
// ]);

// console.log(newWeakMap);
// console.log(emptyWeakMap);

// #2. set() : key,value 설정 : WeakMap 인스턴스에 key와 value를 설정합니다.

// const newWeakMap = new WeakMap();

// (function() {
//     var obj = {item : "weakmap"};
//     newWeakMap.set(obj, "GC");
// }());

// const newMap = new Map();
// (function() {
//     var obj = {item : "map"};
//     newMap.set(obj, "Keep");
// }());

// setTimeout(function() {
//     console.log("1:" , newWeakMap);
//     console.log("2:" , newMap);
// }, 1000);

// #3. set() 2
// const newWeakMap = new WeakMap();
// let sportObj = {};

// newWeakMap.set(sportObj, "Object-1");

// sportObj = {};
// newWeakMap.set(sportObj, "Object-2");

// setTimeout(function() {
//     console.log(newWeakMap);
// }, 1000);

// #4. set() 3
// const newWeakMap = new WeakMap();
// let fn = function(){};

// newWeakMap.set(fn , "함수");

// newWeakMap.set(fn , "value 변경");

// console.log(newWeakMap);

// #5.get() : key가 같은 value 반환 : weakmap 인스턴스에서 key가 같은 value를 반환 한다
// const newWeakMap = new WeakMap();
// let obj = {};

// newWeakMap.set(obj, "오브젝트");
// console.log(newWeakMap.get(obj));


// #6. has() : key 존재 여부 : true/false 반환
// const newWeakMap = new WeakMap();
// let obj = {};

// newWeakMap.set(obj, "오브젝트");
// console.log(newWeakMap.has(obj));

// #7. delete() : 엘리먼트 삭제 : WeakMap 인스턴스에서 key가 같은 엘리먼트를 삭제합니다.
const newWeakMap = new WeakMap();
let obj = {name:"shin"};
newWeakMap.set(obj, "오브젝트");

console.log(newWeakMap.delete(obj));
console.log(newWeakMap);
console.log(obj);