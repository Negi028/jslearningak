//suppose we want to find product of multiple array inside a single array nested loop concept arrive
//ex how you will find this product [[2,3],[1,2],[1,3,4,8]]?????
function multipyarr(arr){
    var product=1; // intialize with 1
    for (var i=0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            product*=arr[i][j];   // inside 0th index product will finds upto the length  after that it will again goes to upper loop
        }
    }
    return product; // after that return the value of resultant product 
};
var product = multipyarr([[1,2],[3,4],[5,6,7]]);
console.log(product);