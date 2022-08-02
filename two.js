const radiusAll=[2,4,6,8];
const diameter=function(radii){
    return 2*radii;
}
const area=function(r){
    return Math.PI*r*r;
}
const CircumFrence=function(r){
    return Math.PI*2*r;
}


let calculate=function (radius,logic){
    let ans=[];
    for(let i=0;i<radius.length;i++){
        ans.push(logic(radius[i]));
    }
    return ans;
}
console.log(calculate(radiusAll,diameter));
console.log(calculate(radiusAll,area));
console.log(calculate(radiusAll,CircumFrence));
