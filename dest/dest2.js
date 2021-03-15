"use strict";

// 디스트럭처링 (분할 할당)
// distructuring Assignment

let one, two, three, four, other;

[one , , , four] = [1,2,3,4];
console.log(one, four);

[one, ...other] = [1,2,3,4];
console.log(other);
// 스프레드 연산자는 그 자체로 배열 처리 한다