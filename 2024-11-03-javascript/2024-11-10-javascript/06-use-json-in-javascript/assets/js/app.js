const students = [
  {
  name: 'mira',
  lastName: 'agarunov',
  grades: [89],
},{
  name: 'mishel',
  lastName: 'donde',
  grades: [90],
},{
  name:'ido',
  lastName: 'kahana',
  grades: [95],

}
]


const jsonString = JSON.stringify(students)
document.write(jsonString)
document.write('<hr>')

console.log(students)
console.log(jsonString)

//turns a json string an object
const friends = JSON.parse(jsonString)
console.log(friends)
console.log(`i have ${friends.length} friends`)
