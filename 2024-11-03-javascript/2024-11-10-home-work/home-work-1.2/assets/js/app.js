
  const clothes = [{
    type: 'satin',
    size: 'xs',
    color:'black',
    price: 89
  },{
    type: 'cotton',
    size: 'm',
    color:'pink',
    price: 69
  },{
    type: 'linen',
    size: 'l',
    color:'rad',
    price: 79
  },{
    type: 'viscose',
    size: 'xxl',
    color:'black',
    price: 100
  },{
    type: 'lycra',
    size: 's',
    color:'blue',
    price: 10
  }
  ]
  
  
  for(const car of clothes){
    console.log(`properties of ${car.name}`)
    for(const property in car)
        console.log(`${property} valua is ${car[property]}`)
  }
  
  
  