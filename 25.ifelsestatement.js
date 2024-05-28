function test(val){
    result='';
    if(val > 5){
        result = "val is bigger than 5";
    }
    else{
        result= " val is smaller than 5";
    }
    return result;
}

console.log(test(7));
console.log(test(3));


// by default it returns boolean values
function isless(a,b){
    return a<b;
}
console.log(isless(10,15));