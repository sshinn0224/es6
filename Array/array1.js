"use strict";

// # from 1
// let arrayObj = Array.from({0: "zero", 1:"one", length:2});

// console.log(Array.isArray(arrayObj));
// console.log(arrayObj);

// let stringObj = Array.from("ABC");
// console.log(stringObj);

// let arrayObj2 = Array.from(["test", "test2"]);

// console.log(arrayObj2);
// console.log(Array.isArray(arrayObj2));

// from 2
// let arrayLike = {0 : 10, 1 : 30, length:2};
// let values = Array.from(arrayLike, function(value) {
//     console.log(value);
//     return value + this.bonus; // this 는 세 번째 파라메터의 Object
// }, {bonus: 100});

// console.log(values);

// of - 배열 엘리먼트 설정
// let arrayObj = Array.of(1,2,3);
// console.log(arrayObj);

// copyWithin() - 범위 값 복사, 설정
// let one = [1,2,3,4,5];
// console.log(one.copyWithin(0,3));

// let two = [1,2,3,4,5];
// console.log(one.copyWithin(0,2,4));

// let three = [1,2,3,4,5];
// console.log(three.copyWithin(3));

// copyWithin #2
// let arrayLike = {0:"ABC" , 1:"DEF" , 2:"가나다", length: 3};
// let one = Array.prototype.copyWithin.call(arrayLike, 0, 1);
// console.log(one);

// function two() {
//     return Array.prototype.copyWithin.call(arguments, 3, 0, 2);
// };

// console.log(two(1,2,3,4,5));

// fill() - 범위 값 변경
// let one = [1,2,3];
// console.log(one.fill(7));

// let two = [1,2,3,4,5];
// console.log(two.fill(7,1));

// let three = [1,2,3,4,5];
// console.log(three.fill(7,1,3));

// entries() - 이터레이터 오브젝트 생성 : array 오브젝트를 이터레이터 오브젝트로 생성 반환
// let values = [10, 20, 30];
// let iterator = values.entries();
// console.log(iterator.next());

// for (var [key, value] of iterator) {
//     console.log(key, ":" , value);
// };

// values() : value 이터레이터 오브젝트 생성 
// let iterator = [10,20,30].values();
// console.log(iterator.next());

// find() : 엘리먼트값 비교, 현재 보고있는 엘리먼트를 반환 : 콜백 함수 파라메터는 정해져있다.
// let result = [1,2,3].find((value, index, allData)=> value === 2);
// console.log(result);

// result = [1,2,1].find(function(value, index, allData) {
//     return value === 1 && value === this.key;
// } , {key : 1});
// console.log(result);

// findIndex() :배열 인덱스 반환
let result = [10,20,30].findIndex((value,idx,data)=>{
    return value === 20;
});
console.log(result);

result = [10,20,30].findIndex((value, idx, data) => value === 77);
console.log(result);

result = [10,20,30].findIndex(function(value, idx, data) {
    return value === 30 && value === this.check;
},{check : 30});
console.log(result);
