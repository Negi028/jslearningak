//EQUALITY OPERATORS
//assignment operator is "="

const age=18; // only Number data type allowed in this case
//STRICT EQUALITY OPERATOR , NO TYPE COERCION MEANS NO DATA CHANGE AUTOMATICALLY, 3 equal sign
if(age===18){
    console.log("adult");
}else{
    console.log("too young for that");
}

//LOOSE EQUALITY OPERATOR, TYPE COERCION  , only 2 equal sign
const ag="18";//free for choosing data type String or Number
if(ag==18){
    console.log("adult");
}else{
    console.log("too young for that");
}
