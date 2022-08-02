// CONVERTING ONE ARRAY INTO A SINGLE ARRAY
let arr=[1000,10,20,30,40];
function findsum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findsum(arr));
const ans=arr.reduce(function(acumulate,curr){
acumulate=curr+acumulate;
return acumulate;

},0)// this zero which is second argument in the reduce function means that we are passing the acumulate the 
// initial value  of acumulator;
console.log(ans);

const max=arr.reduce(function(acu,curr){
    if(curr>acu){
        acu=curr;
    }
    return acu;
},0);
console.log(max);