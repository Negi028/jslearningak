//NAN means not a number
//PARSEINT()
//checking it is a integer
function convetintoint(str){
    return parseInt(str);
}
console.log(convetintoint("sr"));
console.log(convetintoint("56"));

function convetintoint(str){
    return parseInt(str,2);
}
console.log(convetintoint("10011"));
