let person1={
    name:"Anmol",age:23
}
function showDetails(city,state){
    console.log(this.name+" is of age"+this.age+" and city is "+city+"state "+state);//city+" state is "+state);
}
let k=showDetails.bind(person1,"ghaziabad");
console.log(k);
console.log("Dotted");
k("Himachal");

Function.prototype.myBind=function(...args){
    let obj=this;// this refets to forthefunction to which is called yha p wo showDetails hai yha p refer kar 
    // rah hai dot k left par
    //console.log("this is ",obj); refers to showDetails
    let para=args.slice(1);

    return function(){
        // due to paramerters we have to take apply
        obj.apply(args[0],para);
    }
}
let a=showDetails.myBind(person1,"merrut ");
a("UP");
