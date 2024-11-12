const Book = [
  {
    ID: '6789',
    Name:'tvd' ,
    Author:'yoyo' ,
    Price: '39',
    
},{
  ID: '12345',
    Name:'its end with us' ,
    Author:'colleen' ,
    Price: '29',
    
},{
  ID: '34567',
    Name:'ugly' ,
    Author:'colleen' ,
    Price: '19',
    
}
]


const jsonString = JSON.stringify(Book)
alert(jsonString)


const items = [
  {
    ID: '6789',
    Name:'tvd' ,
    Author:'yoyo' ,
    Price: '39',
    
},{
  ID: '12345',
    Name:'its end with us' ,
    Author:'colleen' ,
    Price: '29',
    
},{
  ID: '34567',
    Name:'ugly' ,
    Author:'colleen' ,
    Price: '19',
    
}
]

for(const item of items){
  console.log(`property of ${item.ID}`)
  for(const property in item )
    console.log(`${property}  ${item[property]}`)
  
  
}


