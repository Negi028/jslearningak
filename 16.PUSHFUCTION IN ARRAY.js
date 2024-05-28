//example
var ourarray=["ak",78,45];
ourarray.push(["AKASH",27]);
//this means now ourarray equals to [["AKASH",27],["ak",78,45]] 

// REMOVAL

var narray=[1,2,3];
varremoved= narray.pop();         //this will remove 3, from last element
console.log(narray);


//REMOVAL FROM 1ST ELEMENT IN ARRAY

var list=[["ohm",78,9],["AKASH",28,18]];
console.log(list);
var remo_list= list.shift();  //REMOVE 0 INDEX ELEMNT
console.log(remo_list);


//UNSHIFT MEANS REPLACEMENT OF 0 INDEX ELEMENT

var id=["John",28,67];
id.shift(); // on 0 index
id.unshift(["AKASH"]);  // this means now array equals to ["AKASH",28,67]
console.log(id);