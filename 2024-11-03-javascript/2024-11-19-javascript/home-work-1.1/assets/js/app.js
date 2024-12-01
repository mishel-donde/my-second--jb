function collectData(){
    const carName = document.getElementById(`ingredient`).value
    const engineVolume = document.getElementById(`amount`).value
    // const carColor = document.getElementById(`carColor`).value
    const imageUrl = document.getElementById('imageUrl').value
    return {
        carName: ingredient,
        engineVolume: amount,
        // carColor: carColor,
        imageUrl: imageUrl
    }
  

}

function generateHTML(data){
    const newHTML = `
    <tr>
            <td>${data.ingredient}</td>
            <td>${data.amount}</td>
             <td><img src="${data.imageUrl}" /></td>
        </tr>
    `
   return newHTML
}

function renderHTML(newHTML){
    const cakeIngredient = document.getElementById('cakeIngredient')
    cakeIngredient.innerHTML += newHTML

}
function clearForm(){
     // const carName = document.getElementById('carName')
    // const engineVolume = document.getElementById('engineVolume')
    // carName.value = ''
    // engineVolume.value = ''

    // we can clear the entire form in one command
    const carForm = document.getElementById('cakeForm')
    carForm.reset()

    const carNameInput = document.getElementById('ingredient')
    carNameInput.focus()
}

// function saveToStorage(cakeObject){
//     const currentCakeInStorage = JSON.parse(currentCakeInStorageJSON)
//     localStorage.setItem('cake', JSON.stringify(cakeObject))

// }

function addCakeToTable(event){
    event.preventDefault()
   const data = collectData()
   const newHTML = generateHTML(data)
//    saveToStorage(data)
    renderHTML(newHTML)
    clearForm()
}