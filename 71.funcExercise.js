/*1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams


Test data:
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49*/

const calcdAverag = (s1,s2,s3)=>{
    const sum= s1+s2+s3;
    const avg= sum/3;
    return avg;
}
function avgdolphin(){
    return (calcdAverag(44,23,71));
}
console.log("average of dolphin team is : ",avgdolphin());

function avgkoalas(){
    return (calcdAverag(65,54,49));
}
console.log("average of koalas team is : ",avgkoalas());