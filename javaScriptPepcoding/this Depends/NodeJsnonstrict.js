
// console.log(this); In non  strict mode in global we get {}
// function x(){
//     console.log("ANmol LAtiyan");
//     console.log(this);// object [global]
//     this.setTimeout(() => {console.log("anmol")
        
//     }, 1000);// by using this we call access the api
// }
// x();

// object k andar function
// let obj={
//     name:"anmol",
//     age:22,
//     a:function(){console.log("lastName");
//     console.log(this);// this is pointing to the object in this a function is present 
//     delete this.name;
//     console.log(this)

//     }
// }

// obj.a();

// object k andar function aour phir ush k andar function
let obj={
    anmol:"anmol latiyan",
    lastName:"Latiyan",
    fun:function(){
        console.log("have fun");
        function x(){
            console.log("I am x function");
            console.log(this); // this points to global object 
        }
        x();
    }
}
obj.fun();