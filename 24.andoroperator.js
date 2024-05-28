function test(val){
    if(val<=50&&val>=25){
        return "YES";
    }
    return "NO";
}
console.log(test(28));

console.log(test(75));

//OR OPERATOR

function either(value){
    if(value>=10||value>=3){
        return "TRUE";
    }
    return "FALSE";
}

console.log(either(2));
console.log(either(56));