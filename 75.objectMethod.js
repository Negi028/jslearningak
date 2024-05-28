// OBJECT METHOD
const profile = {
    firstName : "Akash",
    lastName  : "Negi",
    birthYear : 2003,
    hasDL     : true,

    //calcUmar: function(birthYear){
    //return 2024 - birthYear; 
    //}
    calcUmar:function(){
        return 2024 - this.birthYear;  //this will directly reference to profile object 
    }
};
console.log(profile.calcUmar());//if you are using this keyword you dont need to give arguements 
console.log(profile["calcUmar"]());