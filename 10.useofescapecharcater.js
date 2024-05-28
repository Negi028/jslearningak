//ex. if you have double quoted string and you don't wnat to print quote symbol then you can do this
var myStr="I AM A \"double quoted\"string inside \"double quotes\"" ;
//back slash escape the whole quotes . it will consider quote only a quote
console.log(myStr);


//instead of adding back slash we can do 
myStr='I AM A "double quoted"string inside "double quotes"' ;
//removing of back slash and only use of single quotes
console.log(myStr);