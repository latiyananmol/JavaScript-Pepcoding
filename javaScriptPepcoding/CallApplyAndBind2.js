let person1={
    name:"anmol",age:23,
  
}
let person2={
    name:"Sakshi ",age:25
}
// of define the show Details globally 
function showDetails(){
    console.log(this.name+" is "+this.age+"years OF age");
}
// showDetails.call(person2);
// showDetails.call(person1);

function info(city,car){
    console.log(`${this.name} is ${this.age} years of age he lives is ${city} and drives ${car}`);
}
info.call(person1,"Ghaziabad","Audi"); // call function with external arguments
info.call(person2,"merrut","tata");
info.apply(person2,["London","AUDI"]);
let fun=info.bind(person1,"leh","helicopter");
fun();

