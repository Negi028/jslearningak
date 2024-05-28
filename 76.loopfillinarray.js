const years = [1998,2003,2005,1964,1968];
const ages=[];
for(i=0;i<years.length;i++){
    ages.push(2024-years[i]);
}
console.log(years);
console.log(ages);

//inside loop

for(let exc=1;exc<4;exc++){
    console.log("begin with exercise no. ",exc);
    
    for(let rep=1;rep<5;rep++){
        console.log("----reps begin",rep);
    }
}