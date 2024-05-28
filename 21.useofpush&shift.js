//JSON.STRINGIFY IS JUST A WAY TO CHANGE A ARRAY INTO STRINGS
function nextline(arr,item){
    arr.push(item);        // it will add a item 
    return arr.shift();  // it will remove and return 0 index element
}

var newarray=[1,2,3,4,5];

console.log("BEFORE"+ JSON.stringify(newarray));
console.log(nextline(newarray,8));
console.log("AFTER"+JSON.stringify(newarray));