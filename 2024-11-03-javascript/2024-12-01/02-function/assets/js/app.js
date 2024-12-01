const lastName= 'shachr'
const highestGrade = 96
function showGrade(grade){
  console.log(`grade is ${grade}`)
  return true
}

function showName(name){
  console.log(`name is ${name}`)
}

function showFunction(someFunction){
  console.log(`someFunction is ${someFunction}`)
  console.log(`someFunction is ${ typeof someFunction}`)
  someFunction(60)
}

showName(lastName)
showName(highestGrade)

showFunction(showGrade)