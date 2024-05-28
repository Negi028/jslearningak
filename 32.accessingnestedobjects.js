var mystorage={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
//accessing nested objects
var mystorinside= mystorage.car.inside["glove box"];
console.log(mystorinside);