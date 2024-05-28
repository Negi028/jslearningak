//PROMPT() FUNTION IS USE FOR TAKING INPUT'
const prompt= require("prompt-sync")({sigint:true});
const fav = Number(prompt("what is your favorite number :"));
console.log(fav);
if(fav===18){
    console.log("your are definitely fan of THE KING KOHLI");
}
else if(fav===70){
    console.log(" FAN");
}