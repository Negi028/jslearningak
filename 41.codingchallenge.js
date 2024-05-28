//from the name give all property of candidate if not present return no such data availaible
//setup
var candidates =[
    {"firstname":"ak",
"lastname":"neg",
"age":18,
"likes":["reading","chilling","foodie"]},
{
    "firstname":"man",
    "lastname":"negi",
    "age":14,
    "likes":["fukrapanti","nolikes","always makes faces"]
},
{
    "firstname":"bhando",
    "lastname":"bhadari",
    "age":18,
    "likes":["crying","anger","always makes faces"]
},
{
    "firstname":"king",
    "lastname":"kohli",
    "age":34,
    "likes":["cricket","anushka","aggression","18 number","80century","words kam pd jayenge"]
}
];
//new logic is here 
function lookresume(name,prop){
    for (var i=0; i<candidates.length ; i++){
        if(candidates[i].firstname===name){
            return candidates[i][prop];
        }
    }
    return "DATA NOT FOUND"
};
data = lookresume("bhando","likes");
console.log(data);
