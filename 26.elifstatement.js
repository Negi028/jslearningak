function test(val){
    if(val > 10){
        return " VALUE IS BIGGER THAN 10";
    }
    else if( val >=10 && val < 20){
        return "VALUE IS BETWEEN 10 AND 20";
    }
    else{
        return "VALUE IS SMALLLER THAN 10";
    }
}

console.log(test(30));
console.log(test(10));
console.log(test(5));