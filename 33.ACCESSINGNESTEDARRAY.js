//accessing nested array
var imagine=[{
    "tree":"brown",
    list:[
        "akash",
        "aka",
        18
    ]
},
    {
        "intro":{
            "name":"kohli",
            "age":18
        }
    }


];

//suppose acess aka so 
var inside = imagine[0].list[1];
console.log(inside);
//we need to access second object age
var outside= imagine[1].intro["age"];
console.log(outside);