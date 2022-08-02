function add(x){
    return function(y){
        console.log(x+y);
    }
}
let addWith2=add(2);//In addWith2 function jab returned Hua hoga toh appne closure k sath aya hoga  
addWith2(3);
// currrying with closures

