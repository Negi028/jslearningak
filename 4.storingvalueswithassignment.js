var a;//it should be null but why undefine??? either garbage value???
var b=2;
console.log(a);
console.log(b);

//now dynamic allocation
 a=9;
 b=a;
 console.log(a);
 console.log(b);