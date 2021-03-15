"use strict";

// 디스트럭처링 (분할 할당)
// distructuring Assignment

let five, six;
({one: five , two: six} = {one: 10, two: 20}); // 사전 할당 된 변수르 사용하려면 () 안에 넣는다.

console.log(five, six);

let {nine, plus: {ten}} = {nine: 9 , plus:{ten :10}}; // 좌우가 같으면 어쨋든 생성해 버린다. 단, plus는 경로(구조) 를 맞추기 위한 것. plus로 출력 할 수는 없다.

console.log(nine, ten);