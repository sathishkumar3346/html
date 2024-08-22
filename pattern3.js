let b=5
for(let i=1;i<b;i++){
  let a=""
  for(let j=b;j>=i;j--){
    a+=" "
  }
  for(let z=1;z<=i*2-1;z++){
   
         if(z==1 || z==2*i-1){
           a+="*"
         }else{
           a+=" "
         }
     } 
  
  console.log(a)
}
for(let i=1;i<=b-1;i++){
     let a=""
     for(let j=0;j<=i;j++){
       a+=" "
     }
     for(let z=(b-i)*2-1;z>=1;z--){
        if(z==1 || z==(b-i)*2-1){
            a+="*"
          }else{
            a+=" "
          }
      }
      console.log(a)
}