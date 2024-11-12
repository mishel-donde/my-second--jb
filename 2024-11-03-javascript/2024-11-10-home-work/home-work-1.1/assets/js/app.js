
  const cars = [{
    name: 'kia',
    year: '2018',
    color:'black'
  },{
    name: 'mazda',
    year: '2022',
    color:'red'
  },{
    name: 'bmw',
    year: '2024',
    color:'black'
  }
  ]
  
//   console.log(`there are ${car.length} in my collection`);
  
  for(const car of cars){
    console.log(`properties of ${car.name}`)
    for(const property in car)
        console.log(`${property} valua is ${car[property]}`)
  }
  
  
  