//new way to define a function inside a object
const bicylce ={
    gear:2,
    setgear(newgear){
        "use strict";
        this.gear=newgear;
    }
};
bicylce.setgear(3);
console.log(bicylce.gear);