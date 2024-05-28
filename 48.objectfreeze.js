//object.freeze() can prevent object from mutability
function objfreeze(){
    "use strict";
    const MATH_constants = {
    PI: 3.14
    };


    object.freeze(MATH_constants);
};
    /*try{
        MATH_CONSTANT.pi=99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANT.pi;
}*/
const PI =objfreeze();
console.log(PI);