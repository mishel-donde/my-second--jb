// function collectData(){
//     const firstName= document.getElementById('firstName').value
//     const lastName= document.getElementById('lastName').value
//     const studentGrade= document.getElementById('studentGrade').value

//     if(firstName === ""){
//         alert("first Name required!")
//         return
//     }
//     if(lastName === ""){
//         alert("last Name required!")
//         return
//     }
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         studentGrade: studentGrade,
//     }
// }



// function generateHTML(data){
//     const newHTML = `
//         <td>${data.firstName}</td>
//         <td>${data.lastName}</td>
//         <td>${data.studentGrade}</td>
    
//     `
//     return newHTML

// }



// function renderHTML(newHTML){
//     const averageScore = document.getElementById('averageScore')
//     averageScore.innerHTML += newHTML

    

// }



// function clearForm(){
   
//     const studentForm = document.getElementById('studentForm')
//     studentForm.reset()
    
//     const firstNameInput = document.getElementById('firstName')
//     firstNameInput.focus()


// }

// function saveSingleGradesToStorage(studentObject) {
//     const currentGradesInStorageJSON = localStorage.getItem('grades')

//     let gradesArray;
//     if (!currentGradesInStorageJSON) {
//         gradesArray =[]
//     } else {
//         gradesArray = JSON.parse(currentGradesInStorageJSON)
//     }
    
//     gradesArray.push(studentObject)
 

//     let scoresSum = 0;
//     let averageScore = 0;

//     for (let i = 0; i < gradesArray.length; i++) {
//         scoresSum += +gradesArray[i].grade;
//     } 
//     if (scoresSum !== 0) {
//         averageScore = scoresSum / gradesArray.length;
//         console.log(scoresSum, gradesArray.length)
//     }
     
//     localStorage.setItem('grades', JSON.stringify(gradesArray))

//     localStorage.setItem('average', averageScore)


// }

 




// function addStudentToTable(event){
//     event.preventDefault()
//    const data = collectData()
//    const newHTML=generateHTML(data)
//    saveSingleGradesToStorage(data)
//     renderHTML(newHTML)
//     clearForm()
//     document.getElementById('averageScore').innerHTML =localStorage.getItem('average')
//}


// function loadStudentFormLocalStorage() {
//     const gradesJSON = localStorage.getItem('grades')
//     if(gradesJSON) {
//         const grades = JSON.parse(gradesJSON)
//         for(const grade of grades) {
//             const newHTML = generateHTML(grade)
//             renderHTML(newHTML)
//         }
//     }
// }




// loadStudentFormLocalStorage()

// מאחתל אחסון קודם,מילוי הפרטים ששמרנו לפני כן בדפדפן
// localStorage.clear('grades');
// localStorage.clear('average')

function collectData() {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const grade = document.getElementById('grade').value
    return {
        firstName: firstName,
        lastName: lastName,
        grade: grade,
    }
}

function generateHTML(studentData) {
    const newHTML = `
        <tr>
            <td>${studentData.firstName}</td>
            <td>${studentData.lastName}</td>
            <td>${studentData.grade} </td>
        </tr>    
    `
    return newHTML
}

function renderHTML(newHTML) {
    const carsContainer = document.getElementById('carsContainer')
    carsContainer.innerHTML += newHTML
}

function clearForm() {
    // const carName = document.getElementById('carName')
    // const engineVolume = document.getElementById('engineVolume')
    // carName.value = ''
    // engineVolume.value = ''

    // we can clear the entire form in one command
    const carForm = document.getElementById('carForm')
    carForm.reset()

    const carNameInput = document.getElementById('carName')
    carNameInput.focus()
}

function saveSingleGradeToStorage(studentObject) {
    const currentGradesInStorageJSON = localStorage.getItem('grades')

    let gradesArray;
    if (!currentGradesInStorageJSON) {
        gradesArray = []
    } else {
        gradesArray = JSON.parse(currentGradesInStorageJSON)
    }
    
    gradesArray.push(studentObject)

    let scoresSum = 0;
    let averageScore = 0;

    for (let i = 0; i < gradesArray.length; i++) {
        scoresSum += +gradesArray[i].grade;
    } 
    if (scoresSum !== 0) {
        averageScore = scoresSum / gradesArray.length;
        console.log(scoresSum, gradesArray.length)
    }
    localStorage.setItem('grades', JSON.stringify(gradesArray))
    localStorage.setItem('average', averageScore)
}

function addCarToTable(event) {
    event.preventDefault()
    const studentData = collectData()
    const htmlTableRow = generateHTML(studentData)
    saveSingleGradeToStorage(studentData)
    renderHTML(htmlTableRow)
    document.getElementById('averageScore').innerHTML= localStorage.getItem('average')
    clearForm()
}

function loadCarsFromLocalStorage() {
    const carsJSON = localStorage.getItem('cars')
    if(carsJSON) {
        const cars = JSON.parse(carsJSON)
        for(const car of cars) {
            const newHTML = generateHTML(car)
            renderHTML(newHTML)
        }
    }
}

loadCarsFromLocalStorage()