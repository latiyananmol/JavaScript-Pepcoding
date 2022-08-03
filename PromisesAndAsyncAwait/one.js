let fs=require("fs");

let pro=fs.promises.readFile("f1.txt");
pro.then(function(an){
    console.log("  "+an+"   ");
}).catch(function(err){
    console.log("error");
})

