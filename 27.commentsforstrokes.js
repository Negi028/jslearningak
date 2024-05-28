//defining array of comments
var comments=["tremendunous","spectatular",100,"fantastic","golden duck"];
function strokes(run){
    if(run<50&&run>40){
        return comments[0];
    }
    else if (run==50 ){
        return comments[1];
    }
    else if (run==100){
        return comments[2];
    }
    else if(run>75&&run<100){
        return comments[3];
    }
    else if(run == 0){
        return comments[4];
    }
}

console.log(strokes(45));
console.log(strokes(50));
console.log(strokes(100));
console.log(strokes(78));
console.log(strokes(0));