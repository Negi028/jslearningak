/* comparing the bmi of mark and john calculate using formula bmi= weight(in kg)/(height)**2(in meter)
TEST 1 :{
    mark height=1.69m : weight = 78kg
    johhn heigt = 1.95m : weight = 92kg
}
TEST 2 :{
    mark height=1.88m : weight = 95kg
    johhn heigt = 1.76m : weight = 85kg
}
*/
const markht=1.69;
const  markwt= 78;
const  markbmi =  markwt/markht**2;
console.log("BMI OF MARK IS :",markbmi);
const johnht=1.95;
const johnwt= 92;
const  johnbmi =  johnwt/johnht**2;
console.log("BMI OF JOHN IS :",johnbmi);
console.log(johnbmi>markbmi);


//for comparision of mark and john we can directly do this

