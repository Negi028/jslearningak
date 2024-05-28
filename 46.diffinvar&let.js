//DIFFERENCE B/W VAR AND LET KEYWORD
function checkscope(){
var i ="global scope";
 /*if it will ignores then 
local scope is local
global scope is  local

*/
if(true){
    let i="local";
    console.log("local scope is",i);
}
console.log("global scope is ",i);
return i;

}
checkscope();

//var can be used for declaring the variable globally anf not give error 
//but let only used for under bondage like if you declare a variable by let globally then you can't define same variable inside loop
//it will show error 