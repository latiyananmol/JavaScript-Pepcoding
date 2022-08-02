// the function which takes another function as argument or return the function are called "HigherOrder Funtions "
// example
function x(){
    console.log("anmol LAtiyan");
}
function High(kk){
    kk();
    
}
High(x);

// Functional Programing 
const radius=[1,3,5,6];
// find area
const Area=[];
for(let i=0;i<radius.length;i++){
    Area.push(Math.PI*radius[i]*radius[i]);
}
console.log(Area);
// calculate Dia
const Dia=[];
for(let i=0;i<radius.length;i++){
    Dia.push(radius[i]*2);
}

console.log(Dia);
// CircumFrence
let ciro=[];
for(let k=0;k<radius.length;k++){
    ciro.push(Math.PI*2*radius[k]);
}
console.log(ciro);
