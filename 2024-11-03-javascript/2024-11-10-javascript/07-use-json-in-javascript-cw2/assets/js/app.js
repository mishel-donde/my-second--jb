const store = [
  {
  store: 'rolex',
  city: 'paris',
  street: 'liza',
  num: 10 ,
  items: 'rings'
  }
]


const jsonString = JSON.stringify(store)
document.write(jsonString)
document.write('<hr>')

console.log(store)
console.log(jsonString)

const store1 =  JSON.parse(jsonString);
console.log(store1);

//turns a json string an object
// const stores = JSON.parse(jsonString)
// console.log(store)
// console.log(`i have ${store.length} friends`)
