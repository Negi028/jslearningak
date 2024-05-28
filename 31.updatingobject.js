var myprofile= {
    "name": "AKASH",
    "age": 20,
    "hobby": "vella"
};
console.log(myprofile);

//UPDATE OBJECT PROPERTIES

myprofile.name="AKASH NEGI";
console.log(myprofile);

//ADD A NEW OBJECT

myprofile["weakness"]= "combine family";
console.log(myprofile);

//DELETE PROPERTIES

delete myprofile.weakness;
console.log(myprofile);