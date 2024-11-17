// const mycat = [
//   {
//     Name: "bobi",
//     Age: "2",
//     Color: "black",
//     Sterile:"yes" 

// }
// ]


// const jsonString = JSON.stringify(mycat)
// alert(jsonString)


// const yourCat = [
//   {
//     Name: "bobi",
//     Age: "2",
//     Color: "black",
//     Sterile:"yes" 
    
// }
// ]

// for(const cat of yourCat){
//   document.write(` ${cat.Name}`)
//   for(const property in cat )
//     document.write(`${property}  ${cat[property]} <br>`)
  
// }


const myCat = [
  {
     Name: `jimmy`,
     Age: 9,
     Color: `silver`,
     IsSterile: true
      
 },
 ]
 //turns objects into a JSON string
 let catJson =JSON.stringify(myCat);
 alert(catJson);
 
 // turns a json string into an objects
 let yourCat = JSON.parse(catJson)
 alert(`Name: ${yourCat[0].Name} 
    Age: ${yourCat[0].Age}
    Color: ${yourCat[0].Color} 
    Is Sterile: ${yourCat[0].IsSterile ? "Yes" : "No"}`);


