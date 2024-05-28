function wordblanks(mynoun,myadjective,myverb,myadverb){                     /* DEFINING 
                                                                               FUCTION */
    var result="";
    result+="THE "+myadjective+" "+mynoun+" "+myverb+" "+"to the store";
    return result;
}

//CALLING FUCTION
console.log(wordblanks("dog","big","ran","quickly"));