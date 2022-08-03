// Asyncronous call backs
console.log("hello");

// in dono funcgtion ne thread ko roka nahi phale "hello" print hogya phir hello ANMOL phir phir setTimeOut1 and then 
// setTimeOut2
setTimeout(function(){
    console.log("setTimeOut1");
},2000);

// we know that how setTimeout function runs 
setTimeout(function(){
    console.log("setTImeOut2");
},1500);
function sayHello(){
    console.log("hello ANMOl");
}
sayHello();