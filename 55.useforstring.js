//in this case we gonna study from objects we can also access information & apend into string
//use of back tic instead of quotes
const person={
    name:"akash negi",
    age: 19
};

//TEMPLATE LITERAL WITH MULTI-LINE AND STRING INTERPOLATION
const greeting=`HELLO , MY NAME IS ${person.name}!
I AM ${person.age} YEARS OLD.`;
console.log(greeting);
//${} for accesing the object