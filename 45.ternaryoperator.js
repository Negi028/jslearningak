//TERNARY OPERATOR 
// SYNTAX - CONDITION ? TRUE : FALSE;
// USE OF NESTED TERNARY OPERATOR

function checknum(num){
return num>0 ? "POSITIVE" : num<0 ? "NEGATIVE" : "ZERO";
}
console.log(checknum(10));
console.log(checknum(-5));
console.log(checknum(0));