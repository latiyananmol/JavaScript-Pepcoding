let person1={
    name:"Anmol",
    age:23,
    showDetails:function(){
        console.log(this.name+" "+this.age);
    }

}
person1.showDetails();
let person2={
    name:"CArry"
}
person2.__proto__=person1;
person2.showDetails();// by using __proto__ all the properties of the of person1 is imported inside person2

// it will access all the properties which is not present in itself and have its all properties 
// ek object k prototype mai dusre ki prototype daldi it is prototypal inheritance