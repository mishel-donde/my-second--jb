let num = 1
let sum = 0;
let count= 0

while(num !==0) {
  num = +prompt('enter a num');
  sum = sum + num ;
  count++; 
}

  document.write( `the avg is ${sum  / (count-1)}`);
  

