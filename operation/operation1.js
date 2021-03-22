"use strict";

// computed - 문자열과 변수를 조합하여 오브젝트 프로퍼티 이름으로 사용 할 수 있다.
// let item = {
//     ["one" + "two"] : 12
// };

// console.log(item.onetwo);

// console.log('computed 2 ---');

// let item = "tennis";
// let sports = {
//     [item]: 1,
//     [item + "Game"]:"윔블던",
//     [item + "Method"]() {
//         console.log(this);
//         return this[item];
//     }
// };

// console.log(sports.tennis);
// console.log(sports.tennisGame);
// console.log(sports.tennisMethod());

// 디스트럭쳐링과 프로퍼티 이름 조합

// let one = "sports";
// let {[one]: value} = {sports:"농구"};

// console.log(value);

// default value

// let [one , two, five = 5] = [1,2];

// console.log(five);

// [one, two, five = 5] = [1,2,77];
// console.log(five);

// let {six, seven = 7} = {six: 6};
// console.log(six, seven);

let [one, two = one + 1, five = two + 3] = [1];
console.log(one, two, five);