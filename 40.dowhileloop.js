// do while loop will run atleat once time whithout checkeing the condition
//difference b/w while and do while loop
//setup
var myarr=[];
var i=10;

while(i<5){
    myarr.push(i);
    i++;
}
console.log(i,myarr); /*C:\Program Files\nodejs\node.exe .\JSFreeCodeOrg\40.dowhileloop.js
10 (0) []
No debugger available, can not send 'variables'*/
//SETUP OF DO WHILE LOOP

do{
    myarr.push(i);
    i++;
}while(i<5){
}
console.log(i,myarr);