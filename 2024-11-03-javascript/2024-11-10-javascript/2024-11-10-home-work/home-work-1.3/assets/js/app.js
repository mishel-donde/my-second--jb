const Geolocation = [{

  location: "asia",
  latitude: 10000,
  longitude: 20000, 
 

},{
  location: "russia",
  latitude: 30000,
  longitude: 40000, 
},{
  location: "africa",
  latitude: 50000,
  longitude: 60000, 
}

]
for(const clothe of Geolocation){
  console.log(`Geolocations of ${clothe.location}`)
  for(const property in clothe)
      console.log(`${property}  ${clothe[property]} `)
      console.log("----------------------------");
}
  
  