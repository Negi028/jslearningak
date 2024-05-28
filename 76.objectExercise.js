/*Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, 
and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name 
and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.*/

const propM = {
    fullName:"Mark Miller",
    mass:78,
    height:1.69,
    calcBMI:function(){
        this.bmi= this.mass/this.height**2; //storing new property to object
        return this.bmi;
    }
   
};

const propJ = {
    fullName:"John Smith",
    mass:92,
    height:1.95,
    calcBMI:function(){
    this.bmi= this.mass/this.height**2;
    return this.bmi;
    }
};

console.log(propM.calcBMI());
console.log(propJ.calcBMI());
if(propM.calcBMI()>propJ.calcBMI()){
    console.log(`${propM.fullName} has ${propM.calcBMI()} BMI which is higher than ${propJ.fullName} with ${propJ.calcBMI()} BMI.`);
}else{
    console.log(`${propJ.fullName} has ${propJ.calcBMI()} BMI which is higher than ${propM.fullName} with ${propM.calcBMI()} BMI.`);
}
