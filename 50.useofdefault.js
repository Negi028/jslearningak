const increment =( function(){
    return function increment(number,value=1){
        return number+value;
    };
})();
console.log(increment(5,2));
console.log(increment(5));
//instead of this you can write this
function incr(num,val=2) {  //if you will not pass value then by default it will take it
    return num+val;

}
console.log(incr(7,4));
console.log(incr(7))