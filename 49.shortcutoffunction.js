//in this we dont need to write whole function just we can di /
/*var magic= function(){
    return new Date;
}*/
//instead of this we can do this
//const magic= () => new Date(); 
//ARROW FUNCTION
 var myconcat= (arr1,arr2) => arr1.concat(arr2);
 console.log(myconcat([1,2],[3,4,5]));