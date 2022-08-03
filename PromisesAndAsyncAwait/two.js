setTimeout(function(){
    console.log(1);
});
setTimeout(function(){
    console.log(2);
});
let p=new Promise(function(resolve,reject){
    resolve();                                       // can easily this why this is happening 
                                                     // call back queue and microTaskQueue Are Playing here
                                                     
});
p.then(function(){
    console.log(33);
})
p.then(function(){
    console.log(35);
})
console.log(1010);
setTimeout(function(){
    console.log("Last TimeOut");
})