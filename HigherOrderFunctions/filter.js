// filterjs
const arr=[1,2,4,3,6,7,8,10];
console.log(arr.filter(function(x){
return x%2===0;

}))
console.log(arr.filter(function(x){
    return x%2;// zero refers to false 
}))
console.log(arr.filter(function(x){
    return x>5;
}));