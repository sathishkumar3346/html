let b=5;
for(let i=1;i<=5;i++){   
  let a ="";   
  for(let j=1;j<=b;j++){
    if(i==1||i==b){
       a+="*"
    } else{
        if(j==1 || j==b){
          a+="*"
        }else{
          a+=" "
        }
    } 
  }
  console.log(a)
}
console.log("he vel *")
console.log("hi suthakar *")