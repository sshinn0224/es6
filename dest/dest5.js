"use strict";

// 디스트럭처링 (분할 할당)
// distructuring Assignment

function total({one, plus: {two, five}}) {
    console.log(one + two + five);
};

total({one : 1, plus: {two: 2 , five: 5}});