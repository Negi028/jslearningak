//ARRAY - STORE MULTIPLE DATA IN ONE PLACE  ,   ALWAYS INTO SQUARE BRACES
var ourarray= ["JOHN",23]; //traverse into sequential form 

//NESTED ARRAY

var nestedarray = [["ak",23,67.8],["mnk",]];

//ACCESS OF ARRAYS
var roll=[10,45,65,78,45,28];
console.log(roll[0]);
console.log(roll[3]);
console.log(roll[roll.length-2]);//second last element

//ACCESS IN NESTED ARRAYS
var stuids=[["AKASH",28,45.5],["KOHLI",18,76],"CR"];
console.log(stuids[0]); // it will print whole array of akash
//MULTI DIMENSIONAL ARRAY 
console.log(stuids[1][0]); // it will print kohli 
console.log(stuids[2]);  // it will print cr 

