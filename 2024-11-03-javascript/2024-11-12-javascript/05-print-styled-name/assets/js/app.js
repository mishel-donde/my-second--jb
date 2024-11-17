function hardCodedNumbers() {
    document.write(`${firstName[0].toUpperCase()}${firstName.substring(1)}`)    
}

function randomNumbers() {
    document.write(`${lastName[0].toUpperCase()}${lastName.substring(1)}`)    
}

function printStyledFullName() {
    printStyledFirstName()
    document.write(' ')
    printStyledLastName()

}

const firstName = prompt('enter first name')
const lastName = prompt('enter last name')

// printStyledFirstName()
// printStyledLastName()
printStyledFullName()