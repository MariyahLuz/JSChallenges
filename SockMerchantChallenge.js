function sockMerchant(n, ar){
 const count = {};

for (const element of ar) {
  if (count[element]) {
    count[element] += 1;//checks if element already exists in the count object and increaments by 1
  } 
  else {
    count[element] = 1;
  }  
}console.log(count)
  
  let pair = 0
  for(const i in count){

    pair += Math.floor(count[i]/2)
    
  }
  console.log(pair)
}
sockMerchant(10, [1, 2, 3, 1, 2, 3, 4, 1,2, 1])