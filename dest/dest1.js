"use strict";

// 디스트럭처링 (분할 할당)
// distructuring Assignment

// let one , two;
// [one, two] = [1,2];

//one 에 1이 할당되고 , two 변수에는 2가 할당 됨.

let one, two, three, four, five;
const values = [1,2,3];

[one, two, three] = values; // [one, two, three] = [1,2,3];

console.log("A:", one, two, three);

[one, two] = values;
console.log("B:", one, two);

[one , two, three, four] = values;
console.log("C:", one, two, three, four );

[one, two, [three, four]] = [1,2,[73, 74]];
console.log("D:", one, two, three, four);
// 좌 우 모양이 같으면 그냥 그대로 분할하여 들어간다.