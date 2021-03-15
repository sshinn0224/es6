"use strict";

let Sports = function() {
    this.count = 20;
};

Sports.prototype = {
    plus: function() {
        this.count += 1;
    },
    get: function() {
        setTimeout(function(){
            console.log(this === window);
            console.log(this.plus);
        }, 1000);
    }
};

let newSports = new Sports();
newSports.get();

// arrow 2
let Sports2 = function() {
    this.count = 20;
};

Sports2.prototype = {
    plus: function() {
        this.count += 1;
    },
    get: function() {
        setTimeout(() => {
            this.plus();
            console.log(this.count);
        }, 1000);
    }
};

let newSports2 = new Sports2();
newSports2.get();