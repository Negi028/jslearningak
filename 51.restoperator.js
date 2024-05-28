//rest operator allows you to create a function that takes variable number of arguements
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b,0);
    };
})();
console.log(sum(1,4,5,6));