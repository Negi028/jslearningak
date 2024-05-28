/*Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. 
Don't forget that there can be a draw, 
so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, 
a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for a minimum score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same 
score and both have a score greater or equal 100 points. 
Otherwise, no team wins the trophy
Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110*/
const sumdol = 110+108+89;
console.log("summation of dolphin team score is : ",sumdol);
const avgdol=sumdol/3;
console.log("average of dolphin is :",avgdol);
const sumkol = 98+95+110;
console.log("summation of dolphin team scoer is : ",sumkol);
const avgkol=sumkol/3;
console.log("average score of koalas is : ",avgkol);
if(avgdol>avgkol && avgdol>=100){          //FOR BONOUS REQURIEMENT
    console.log("TEAM DOLPHIN WINS TROPHY ");
}else if(avgdol==avgkol){
    console.log("MATCH IS TIED");
}else if(avgkol>avgdol && avgkol>=100){     //for bonous requirement
    console.log("KOALAS WINS TROPHY ");
}
