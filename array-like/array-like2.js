"use strict";

// array-like2
// arraylike는 실무에서 사용할 일이 있을까? 오히려 혼란을 가중시킬 것 같다
let values = {10:'ten', zoo:'동물원', 2:'two', length:3};

for(var k = 0 ; k < values.length; k++) {
    console.log(values[k]);
}