"use strict";

let Sprots = function() {
    this.count = 20;
};

Sprots.prototype = {
    add: () => {
        console.log(this);
        this.count += 1;
    },
    add2: function() {
        console.log(this);
    }
};

let newSports = new Sprots();

newSports.add();
newSports.add2();
console.log(newSports.count);
console.log(window.count);