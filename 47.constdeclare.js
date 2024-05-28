//const only used in READ ONLY you cannot reassign the value
//IF YOU DON'T WANT TO REASSIGN VALUE THEN YOU CAN USE IT , PREVENTS FROM ACCIDENTAL MISTAKES 
/*function printmany(str){
    "use strict";
    var sentence= str+"MAKES PEOPLE FOOL";
    sentence = str+" is G.O.A.T"
    
    for (var i=0;i<str.length;i+=2){
        console.log(sentence);
    }
}
printmany("NEGI");*/

//USING CONST FOR DECLARING
/*function printmany(str){
    "use strict";
    const sentence= str+"MAKES PEOPLE FOOL";
    sentence = str+" is G.O.A.T"
    
    for (let i=0;i<str.length;i+=2){
        console.log(sentence);
    }
}
printmany("NEGI")*/
//SHOWS TypeError: Assignment to constant variable.
function printmany(str){
    "use strict";
    const SENTENCE= str+"MAKES PEOPLE FOOL";
    
    
    for (let i=0;i<str.length;i+=2){
        console.log(SENTENCE);
    }
}
printmany("NEGI")
//CONST VALUE CANT BE CHANGE IF ONCE IT ASSIGN SO IT IS IMMUTABLE ,BUT BY INDEXING YOU CAN REASSIGN IT