
const students = [{
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

// for(studentOfArray in students){
//   console.log(student[studentOfArray].name);
//   console.log(student[studentOfArray].lastName);
//   console.log(student[studentOfArray].grades);

// }
 
console.log(students)

for(const student of students){
  let sum = 0;
  for(const grade of student.grades){
    sum += grade
  }

  // const grades = student.grade // now grades contains an array 
  // const length = grades.length // every array has a called "length"


  console.log(` name of student is ${student.name} and their average is ${sum/student.grades.length}`)
 
}