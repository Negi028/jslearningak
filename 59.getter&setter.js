// we can get the value of keys and also update the values by class method
function makeclass(){
class book{
    constructor(author){
        this._author=author;
    }

//getter
get writer(){
   return this._author;
};
//setter
set writer(updatedauthor){
    this._author=updatedauthor;
}
}
return book;
}
const book = makeclass();
const autho = new book("NEGI");
let _author= autho.writer;
console.log(_author);
autho.writer="AKASH";
_author=autho.writer;//overwrites
console.log(_author);