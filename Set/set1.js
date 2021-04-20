"use strict"

// #1. new Set() : Set 인스턴스 생성
// const setObj = new Set();
// const newSet = new Set([1,2,1,2,"스포츠"]);

// console.log(newSet.size);

// for (let element of newSet){
//     console.log(element);
// }


// #2. add() : value 추가
// const newSet = new Set();
// newSet.add("축구").add("농구");
// newSet.add("야구");

// for(let element of newSet){
//     console.log(element);
// }

// #3. add-2
// const newSet = new Set();
// let music = () => {};

// newSet.add(music);
// newSet.add(music);

// for(let element of newSet){
//     console.log(element);
// }

// #4. has() : value 존재 여부
// const newSet = new Set();

// newSet.add("sports");
// console.log(newSet.has("sports"));


// #5.entries() : 이터레이터 오브젝트 생성 - 이터레이터 오브젝트를 생성하여 반환합니다.
// const newSet = new Set(["one", () => {}]);
// let iteratorObj = newSet.entries();

// console.log(iteratorObj.next());
// console.log(iteratorObj.next());
// console.log(iteratorObj.next());

// #6. values() : value 반환 이터레이터 오브젝트 생성 - value 값을 반환하는 이터레이터 오브젝트를 생성하여 반환한다.
// const newSet = new Set(["one", ()=>{}]);
// let iterObj = newSet.values();

// console.log(iterObj.next());
// console.log(iterObj.next());

// #7. keys() : key 반환 이터레이터 오브젝트 생성 - Set은 value만 받으므로, value를 키로 반환한다....... (그다지 의미를 두지 말자;)
// const newSet = new Set(["one", ()=>{}]);
// let iterObj = newSet.keys();

// console.log(iterObj.next());
// console.log(iterObj.next());

// #8. forEach(): 엘리먼트마다 콜백 함수 호출
// const newSet = new Set(["one", "two"]);

// newSet.forEach(function(value, key, obj) {
//     console.log(value, this.member);
// }, {member: 10});

// #9. delete() : 엘리먼트 삭제
// const newSet = new Set(["one"]);
// console.log(newSet.delete("one"));
// console.log(newSet.size)
// ;

// #10. clear() : 모든 value 지움
// const newSet = new Set(["one", "two"]);
// newSet.clear()
// console.log(newSet.size);

// #11. Symbol.iterator : 이터레이터 오브젝트 생성 
// const newSet = new Set([1, "스포츠"]);
// let iteratorObj = newSet[Symbol.iterator]();

// console.log(iteratorObj.next());
// console.log(iteratorObj.next());



