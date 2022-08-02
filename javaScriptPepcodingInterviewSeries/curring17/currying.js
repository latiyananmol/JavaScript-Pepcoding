function add(a,b){
    console.log(a+b);
}

let addy=add.bind(this,101);//  we know that bind function return a function and here this function refers 
// to add and 101 is the first Argument here
addy(100);
 // this is called function currying 

 // now part Two 
 let addy2=add.bind(this);
 addy2(29,1999); 
 // currying means ki hum ek variable ko constant bna rahe hai wo bhi ush function me jis me do variable pass kiye 
 // hai aour dusra variable hi rahega 


 
