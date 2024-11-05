const start =+prompt(`enter start number`)
const finish =+prompt(`enter start number`)

if(finish < start){
  const helper = start;
  start = finish;
  finish = helper
}

for(let i = start; i <=finish; i++) {
  document.write (`${i}`)
}