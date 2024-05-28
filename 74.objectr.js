const profile = {
    firstName : "Akash",
    lastName  : "Negi",
    birthYear : 2003,
    hasDL     : true
};
console.log(profile.firstName);  //dot operation
console.log(profile["firstName"]); // bracket operation
const additional = "Name";

//console.log(profile."first"+additional); //dot operation needs always exact key to find
console.log(profile["first"+additional]); // bracket operation can do this type of operation 

