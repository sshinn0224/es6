"use strict";

// 디스트럭처링 (분할 할당)
// distructuring Assignment

let {one, two} = {one : 1, nine: 9}; // Object = Object 형태에서도 디스트럭쳐링이 가능 하다. 단 키 값은 같아야 한다.
console.log(one, two);

let three, four;
({three, four} = {three: 3, four: 4});
console.log(three, four);