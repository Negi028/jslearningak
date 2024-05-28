function letters(alpha){
    answer="";
    switch(alpha){
        case "a":
            answer= "apple";
            break;
        case "b":
            answer="birds";
            break;
        case "c":
            answer="cat";
            break;
        default:
            answer="stuff";
            break;

        
    }
    return answer;
}

console.log(letters("a"));
console.log(letters("b"));
console.log(letters("c"));
console.log(letters("d"));
console.log(letters(1));