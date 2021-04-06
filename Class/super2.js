"use strict";

class Sports {
    constructor(member) {
        this.member = member;
        console.log("sports" , this.member);
    }
};

class Soccer extends Sports {
    constructor(member) {
        super(member);
        this.member = 456;
        console.log("soccer", this.member);
    }
};

let obj = new Soccer(123);

