let b=5
for(let i=1;i<b;i++){
  let a=""
  for(let j=b;j>=i;j--){
    a+=" "
  }
  for(let z=1;z<=i*2-1;z++){
    a+="*"
  }
  console.log(a)
}
for(let i=1;i<=b;i++){
     let a=""
     for(let j=1;j<=i;j++){
       a+=" "
     }
     for(let z=b*2-i;z>=i;z--){
      a+="*"
      }
      console.log(a)
}