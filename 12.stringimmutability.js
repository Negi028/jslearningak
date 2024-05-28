//INDIVIDUAL STRING CAN'T BE CHANGED LIKE
var mycha="JELLO WORLD";
console.log(mycha);
//mycha[0]="H";    ALWAYS GIVE ERROR BECAUSE OF IMMUTABLITY
// WE WANT TO SWIPE J WITH H , THIS IS NOT POSSIBLE.
var mycha="HELLO WORLD";
console.log(mycha); 



//HOW TO FIND STRING LAST CHARACTER?????

lastchar=mycha[mycha.length-1]; // because indexig start from zero therefore size -1 gives last character
console.log(lastchar);
//WE CAN DO NTH LAST CHAR ; SIMPLY SIZE - NTH