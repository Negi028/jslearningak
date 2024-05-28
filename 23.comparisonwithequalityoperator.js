function number(val){
    if(val==15){
        return " number is equal";
    }
    return " number is not equal";
}

//calling function
console.log(number(13));
console.log(number(15));


/* STRICTLY EQUALITY OPERATOR
 3===3   gives true
  3==='3'  gives false { STRING}
  BUT 3 == '3' gives TRUE {converts string into integer automatically}
  */

//setup
function compare(a,b){
    //if(a==b){
        if(a===b){          //stictly equality operator 
        return "EQUAL";
    }
    return "FALSE";
}

//calling of function
console.log(compare(4,'4'));

// not equality operator !=
// not strictly operator !==