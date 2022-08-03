// let car1={
//     brand:"BMW",
//     model:"x5",
//     color:"Blue"
// }
// let car2={
//     brand:"Audi",
//     model:"r8",
//     color:"Grey"
// }
// how to do this code with helo of constructor
function car(brand,model,color){
    // here this refers to an empty object 

    this.brand=brand;
    this.model=model;
    this.color=color;
    this.drive=function(){
        console.log("I am driving "+this.brand);
    }
}
let car1=new car('BMW',`x5`,`Blue`);// here this refers to {}
console.log(car1);
let car2=new car('Tata',`nexon`,`grey`);
console.log(car2);
car2.brand="jaguar"
console.log(car2);
car1.drive();
car2.drive();








