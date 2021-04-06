"use strict";

// class Sports {
//     constructor()
//     static setGround(ground) {
//         this.ground = ground;
//     }

//     static getGround() {
//         return this.ground;
//     }
// };

// Sports.setGround("상암구장");
// console.log(Sports.getGround());

class Sports {
    constructor() {
        console.log(Sports.getGround());
        console.log(this.constructor.getGround());
    }

    static getGround() {
        return "ABC";
    }
};

let obj = new Sports();