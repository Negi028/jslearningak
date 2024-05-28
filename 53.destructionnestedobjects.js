//basically isme hum reference krna seekh rahe hai objects seh variable mae
const localforcast = {
    today : {min:4,max:56},
    tomorrow:{min:45,max:88}
};

function getmaxtemp(forecast){
    "use strict";
    const {tomorrow: {max: maxoftomm}}= forecast;
    return maxoftomm;
}
console.log(getmaxtemp(localforcast));