const websiteAddress = prompt('enter a website address')


const indexOfFirstDOT = websiteAddress.indexOf('.')
const suffix = websiteAddress.substring(indexOfFirstDOT)


alert(suffix)