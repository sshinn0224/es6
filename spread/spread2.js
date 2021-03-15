"use strict";

// rest 파라메터

let get = (one) => {
    console.log(one);
}

get(...[1,2,3]);

let advancedGet = (...rest) => {
    // ...rest 는 array로 인식한다.
    console.log('##advancedGet##');
    console.log(rest[0]);
    console.log(rest[1]);
    console.log(rest[2]);
    console.log(rest);
    console.log(Array.isArray(rest));
}

advancedGet(...[1,2,3]);


