const matrix = [
     [12, 23, 34, 45],
      [56, 67, 78, 89], 
      [10, 20, 30, 40]
]

// print 17
document.write(matrix[1][2])
document.write("<hr>")
// print 60
document.write(matrix[2][0])
document.write("<hr>")


// display entire matrix
for(const row of matrix) {
    for(const cell of row) {
        document.write(`${cell} | `)
    }
    document.write('<br>')
}

// calc the sum of matrix
let sum = 0

for(const row of matrix) {
    for(const cell of row) {
        sum += cell
    }
}

document.write(`sum of matrix is ${sum}`)
document.write('<hr>')

// calc the avg of matrix
sum = 0
let count = 0;
for(const row of matrix) {
    for(const cell of row) {
        sum += cell
        count += 1
    }
}

document.write(`avg of matrix is ${sum/count}`)
document.write('<hr>')


const matrix1 = [
    [12, 23, 34, 45], 
    [56, 67, 78, 89], 
    [10, 20, 30, 40]
  ];
  
  
  console.log("המטריצה עם רק מספרים המתחלקים ב-7:");
  matrix.forEach(row => {
    let rowOutput = row.map(value => {
      return value % 7 === 0 ? value : "🙂";  
    });
    console.log(rowOutput);
  });