function collectData() {
    const picText = document.getElementById('picText').value
    const imageUrl = document.getElementById('imageUrl').value
    return {
        picText: picText,
        imageUrl:imageUrl
    }   
}

function generateHTML(data) {
    const newHTML = `
        <tr>
            <td>${data.picText}</td>
             <td><img src="${data.imageUrl}" class="color-cell" /></td>
        </tr>    
    `
    return newHTML
}

function renderHTML(newHTML) {
    const picContainer = document.getElementById('picContainer')
     picContainer.innerHTML += newHTML
}

function clearForm() {
    const picForm = document.getElementById('picForm')
    picForm.reset()

    const picNameInput = document.getElementById('picText')
    picNameInput.focus()

    const urlNameInput = document.getElementById('imageUrl')
    urlNameInput.focus()
}

// function saveSingleCarToStorage(carObject) {
//     const currentCarsInStorageJSON = localStorage.getItem('cars')

//     let carsArray;
//     if (!currentCarsInStorageJSON) {
//         carsArray = []
//     } else {
//         carsArray = JSON.parse(currentCarsInStorageJSON)
//     }
    
//     carsArray.push(carObject)
//     localStorage.setItem('cars', JSON.stringify(carsArray))
// }

function addPicToTable(event) {
    event.preventDefault()
    const data = collectData()
    const newHTML = generateHTML(data)
    renderHTML(newHTML)
    clearForm()
    incrementCounter()
    // saveSingleCarToStorage(data)
}

function incrementCounter() {
    // const counterSpan = document.getElementById('counter')
    counter++
    document.getElementById('counter').innerHTML = counter
}
// function loadCarsFromLocalStorage() {
//     const carsJSON = localStorage.getItem('cars')
//     if(carsJSON) {
//         const cars = JSON.parse(carsJSON)
//         for(const car of cars) {
//             const newHTML = generateHTML(car)
//             renderHTML(newHTML)
//         }
//     }
// }

// loadCarsFromLocalStorage()
let counter = 0;