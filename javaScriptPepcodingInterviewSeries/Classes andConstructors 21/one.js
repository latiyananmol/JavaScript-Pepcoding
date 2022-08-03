class Person {
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;
        
    }
    showDetails(){
     return this.name;
    }
    
}

class PersonChild extends Person{
    constructor(){
        super("constant it is");

    }

}
let person10=new PersonChild();
console.log(person10.showDetails());
let person1=new Person("Anmol",23,"Ghaziabad");
console.log(person1.showDetails());