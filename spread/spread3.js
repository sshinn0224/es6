"use strict";

let get = (one, ...rest) => {
    console.log(one);
    console.log(rest);
};

// get(...[1,2,3]);

// get([1,2,3]);
// get('adf', ...[1,2]);
get(1,2,3);
