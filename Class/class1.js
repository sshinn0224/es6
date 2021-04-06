"use strict";

// class Member {
//     getName() {
//         return "이름";
//     }
// };

// let obj = new Member();

// console.log(obj.getName());
// console.log(obj);

// class #2 expression
// let Member = class {
//     getName() {
//         return "이름";
//     }
// };

// let obj = new Member();

// console.log(obj.getName());
// console.log(obj);

// class #3
class Member {
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
};

Member.prototype.getTitle = function(){};
console.log(typeof Member);