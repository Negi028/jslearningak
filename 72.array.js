// expression function
const calcage = function(birthyear){
    return 2024 - birthyear;
}
// array
years = [1997,1995,2000,1947];
console.log(calcage(years[0]));
console.log(calcage(years[1]));
console.log(calcage(years[2]));
console.log(calcage((years[years.length -1]))); //.length function tells the length of 

years.push(2003);//append element in last
console.log(years);

years.unshift(2005);//append element in first
console.log(years);

years.pop();// last element remove 
console.log(years);

years.shift();// first element remove
console.log(years);


console.log(years.indexOf(2000)); //tells the indexing position of element
console.log(years.includes(2003));// gives boolean value is it in??