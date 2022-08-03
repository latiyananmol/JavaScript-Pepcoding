function hello(name,ag,callback,callback2){ // line one to 12 is Syncronous callbacks
    let msg="hello "+name; 
    callback(msg);
    callback2(ag);
}
function call(ab){
    console.log(ab);
}
function age(age){
    console.log(age);
}
hello("Anmol",23,call,age);

