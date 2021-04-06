"use strict"

// let sym = Symbol();

// try{
//     sym + "문자열";
// } catch(e) {
//     console.log("문자열 연결 불가");
// }

// console.log(String(sym) + '연결');
// console.log(sym.toString() + "연결");

// # symbol은 외부 노출 시키지 않는다
// let sym = Symbol("123");

// try {
//     `${sym}`;
// } catch (e) {
//     console.log("`${sym} 불가");
// }

// #SYMBOL

// let sym = Symbol("123");

// const obj = Object(sym);

// console.log(obj);

// console.log(obj == sym);
// console.log(obj === sym);

// console.log(obj);
// console.log(sym);

// #symbol
// let sym = Symbol('123');
// let obj = {[sym] : "456"};

// console.log(obj);
// console.log(obj[sym]);
// console.log(obj.sym);

// #symbol  사용 형태 : for-in >> 사용할 수 없다.
// let obj = {nine: 999};
// obj[Symbol("one")] = 111;
// obj[Symbol("two")] = "222";

// console.log(obj);

// for ( var key in obj) {
//     console.log(key);
// }

// symbol : 클래스의 메서드 이름으로 symbol 사용 : 가능 
// const symbolOne = Symbol("symbol one");
// const symbolTwo = Symbol("symbol two");

// class Sports {
//     static [symbolOne]() {
//         return "Symbol-1";
//     }
//     [symbolTwo]() {
//         return "symbol-2";
//     }
// }

// console.log(Sports[symbolOne]());

// let obj = new Sports();
// console.log(obj[symbolTwo]());

// symbol : JSON.stringify() 에서 symbol 사용 >> 외부노출 방지를 위해 
// let sym = Symbol("key");
// let result = JSON.stringify({[sym] : "값"});
// console.log(result);