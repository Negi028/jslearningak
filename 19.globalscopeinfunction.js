// DECLARE YOUR VARIABLE HERE IT CAN BE USED ANYWHERE IN PROGRAM
 var myglobal=28;  // it is declared globally - outside the fuction

function func1(){
    var local=8;               // decalred locally
    console.log(myglobal);
}

//console.log(local);  it is declared inside function locally declared
func1();