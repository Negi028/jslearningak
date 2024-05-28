//we can count the elements inside the arrays
var myarr=[10,20,30,40,50];
var totalelement=0; //firstly initialize it from zero
for(var i =0; i<myarr.length;i++){
    totalelement+=myarr[i];
}
console.log(totalelement);