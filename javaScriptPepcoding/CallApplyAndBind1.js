let person1={
    name:"anmol",age:23,
    showDetails:function(){
        console.log(this.name+" is "+this.age+"years OF age");
    }
}
let person2={
    name:"Sakshi ",age:25
}
person1.showDetails();
person1.showDetails.call(person2