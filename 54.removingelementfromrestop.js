//removing first two element from array by rest operator
const source = [1,2,3,4,5,6];
function removefirsttwo(list){
    const [,,...arrs]=list;
    return arrs;
};
const arr= removefirsttwo(source);
console.log(source);
console.log(arr);