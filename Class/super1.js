"use strict";

class Sports {
    setGround(ground) {
        this.ground = ground;
    }
};

class Soccer extends Sports {
    setGround(ground) {
        // super.setGround();
        this.ground = ground;
        console.log(this);
    }
};

let obj = new Soccer();
obj.setGround("상암구장");
console.log(obj.ground);