"use strict";

// #1 unicode

// console.log("\x31\x32\x33");
// console.log("\u0031\u0032\u0033");

// console.log("\u{34}\u{35}\u{36}");
// console.log("\u{1f418}");
// console.log("\uD83D\uDC18");

// #2 fromCodePoint

// console.log(String.fromCodePoint(35, 36, 37));
// console.log(String.fromCodePoint(0x31, 0x32, 0x33));
// console.log(String.fromCodePoint(44032, 44033));
// console.log(String.fromCodePoint(0x1F418));

// #3 includes() : 문자열 포함 여부
// let target = "123가나다라456";

// console.log(target.includes(2));
// console.log(target.includes("가나"));
// console.log(target.includes("12", 5));

// #4 startsWith() : 문자열 시작 여부
// let target = "123가나다";
// console.log(target.startsWith(123));
// console.log(target.startsWith("23"));
// console.log(target.startsWith("가나", 3));

// #5 endsWith() : 문자열 종료 여부
// let target = "123가나다";
// console.log(target.endsWith("가나다"));
// console.log(target.endsWith("가나"));
// console.log(target.endsWith("가나", 5));

// #6 repeat(): 문자열 복제
// let target = "123";
// console.log(target.repeat(3));
// console.log(target.repeat(0));
// console.log(target.repeat(2.7));

// #7 normalize() : 유니코드 정규화 형식 변환
