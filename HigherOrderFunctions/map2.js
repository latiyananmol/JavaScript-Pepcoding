const user=[
    {firstName:"Anmol",LastName:"Latiyan",age:23},
     { firstName:"Arpit",LastName:"Sharma",age:22},
     { firstName:"abc",LastName:"Def",age:23},
     { firstName:"Carry",LastName:"Minati",age:23},
     { firstName:"Sakshi",LastName:"Latiyan",age:25},

]
user.map(function(x){
    console.log(x.firstName+" "+x.LastName);
});
const an=user.reduce(function(acc,cur){
    if(acc[cur.age]){acc[cur.age]=acc[cur.age]+1;

    }else{
        acc[cur.age]=1;
    }
    return acc;


},{})
console.log(an)




