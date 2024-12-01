const showUserLocation = () => {
  const location = () => navigator.geolocation.getCurrentPosition(console.log)
    
}

showUserLocation()