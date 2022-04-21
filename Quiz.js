//PART 1
console.log("//PART1")

let foo =22;
foo ="hello";
foo = true;
console.log(foo)

//PART 2
console.log("//PART 2")

function GetTime(time){
let greetings ="";
if(time<10){
  greetings ="Good morning";
}
else if(time>20){
  greetings ="Good Day"
  }
else if(time<20){
  greetings ="Good evening"
}
else{
  greetings ="Good Day"
}
  return greetings
}
console.log(GetTime(21))

//PART 3
console.log("//PART 3")

let n=0;
let x=0;
while(n<3){
  n++;
  x=x+n;
}
console.log(x);

//PART 4
console.log("//PART 4")

let m=0;
let y=0;
do{
  m++;
  y=y+m;
}while (m<3)
console.log(y)

//PART 5
console.log("//PART 5")

let i=0;
for(let z=0; z<3; z++){
  i=i+n;
}
console.log(i)