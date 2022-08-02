'use strict'
// console.log(this);//==>{}

//Inside Function
// function x(){
//     console.log("xfunction")
//     console.log(this);

// }
// x();

// object k andar function
// let obj={
//     anmol:"anmol",
//     lastname:"Latiyan",
//     fun:function(){
//         console.log("this is fun function")
//         console.log(this);
//         this.papa="hero";
//         console.log(this)
//     }
// }
// console.log(obj.anmol);
// obj.fun();


// object k andar function aour ush function k andar function aour ush function ka this 
let obj={
    h:"Hero",
    a:"Anmol",
    c:"Latiyan",
    k:function(){
        console.log("Carry MInati");
        function i(){
            console.log("anmol");
            console.log(this);
        }
        i();
    }
}

obj.k();