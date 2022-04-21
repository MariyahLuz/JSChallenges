function gradingStudents(grades){
  let arr=[];
  function nextMultiple(n){
    for(let j=0; j<=100; j+=5){
       if(n==j){
         return j+5;
       }
      else if(j>n) {
        return j;
      }
  }
  }
  for(let i=0; i<grades.length; i++){
    
    if(grades[i] >= 38) {
      let nextVar = nextMultiple(grades[i])
      if(nextVar - grades[i] < 3){
        arr.push(nextVar) 
      }
      else{
        arr.push(grades[i])
    
      }                        
    
    } else{
        arr.push(grades[i])
    
      } 
    
 }
  console.log(arr)
}
gradingStudents([84, 29, 57, 64, 73, 67, 38, 33])