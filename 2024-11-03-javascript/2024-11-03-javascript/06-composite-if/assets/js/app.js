
  const grade = +prompt (` enter a grade`)
// //  if(grade>=0 && grade <=100) {
//   document.write(`valid`)
//  } else {
//   document.write(`invalid`)
//  }

 if (grade < 0  || grade > 100) {
  document.write(`valid`)
  document.write(`invalid`)
} else {
    if(grade === 100){
      document.write(`perfect`)
    } else {
      if (grade >= 60){
        document.write (`pass`)
      }else {
        document.write(`fail`)
      }
    }
  }


  
