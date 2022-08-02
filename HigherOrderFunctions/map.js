const arr=[5,1,4,6];
console.log(arr.map((x)=>x*x));
console.log(arr.map(function(x){return x*x;}));
console.log(arr.map((x)=>x.toString(2)));


// polyFill of map is
let add=function(x){
    return x+x;
}
let calculate=function(arr,logic){
    let output=[];
    for(let i=0;i<arr.length;i++){
        output.push(logic(arr[i]));
    }
    return output;
}
let arr2=[5,9];
let f=calculate(arr2,add);
console.log(f);

let arr3=[101,105];
console.log("ANMOL LATIYAN",arr3.map(function(x){
    return x*3;
}));
