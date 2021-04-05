"use strict";

let Sports = {
    getTitle() {
        console.log("Sports");
    }
};

let Soccer = {
    getTitle() {
        super.getTitle();
        console.log("Soccer");
    }
};

Object.setPrototypeOf(Soccer, Sports);
Soccer.getTitle();