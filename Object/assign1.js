// try {
//     let obj = Object.assign(null, {x : 1});
// } catch(e) {
//     console.log("null 지정 불가");
// }

// console.log(Object.assign(123));
// console.log(Object.assign(456,  70));  

// #2 assign2 
// console.log(Object.assign("ABC" , {one : 1}));
// console.log(Object.assign(Symbol("ABC"), {one : 1}));

// try {
//     let obj = Object.assign("ABC" , "ONE");

// } catch(e) {
//     console.log("파라메터 모두 문자열 사용 불가");
// };

// #3 assign3 
// let oneObj = {};
// Object.assign(oneObj, "ABC", undefined, null);
// console.log(oneObj);

// let twoObj = {};
// Object.assign(twoObj, {key1: undefined, key2: null});
// console.log(twoObj);

// #4 assign4
// let sports = {
//     event : "축구",
//     player : 11
// };

// let dup = sports;

// sports.player = 55; // 연동되어 dup 객체의 player도 변경 된다.
// console.log(dup.player);

// dup.event = '농구';
// console.log(sports.event);

// #5 assign5 - ES5 의 고전적(?)인 오브젝트 복사 방식. value에 배열 형태가 올 경우 난감해진다.
// let sports = {
//     event : "축구",
//     player : 11
// }

// let dup = {};
// for(var key in sports) {
//     dup[key] = sports[key];
// }

// sports.player = 33;
// console.log(dup.player);

// assign 6
// let sports = {
//     event : "축구",
//     player : 11
// };

// let dup = Object.assign({}, sports);
// console.log(dup.player);

// dup.player = 33;
// console.log(sports.player);

// sports.event = "수영";
// console.log(dup.event);
// console.log(sports.event);

// assign7 - 고려사항
// let oneObj = {one: 1}, twoObj = {two: 2};
// let mergeObj = Object.assign(oneObj, twoObj);

// console.log(oneObj);
// console.log(mergeObj);
// console.log(Object.is(oneObj, mergeObj));

// mergeObj.one = 456;
// console.log(oneObj);
// console.log(mergeObj);
// console.log(Object.is(oneObj, mergeObj));

// assign8 
// let obj = {one : 1};

// Object.assign(obj, {one: 22}, {two:2}, {two:3}, {four:4});

// for(var pty in obj){ 
//     console.log(pty, obj[pty]);
// }

// assign9
// let count = {
//     current: 1,
//     get getCount() {
//         return ++this.current;
//     }
// };

// let mergeObj = {};
// Object.assign(mergeObj, count);
// console.log(mergeObj);


// assign10
