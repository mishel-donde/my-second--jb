
let multiplicationBoard = [];

for (let i = 1; i <= 10; i++) {  
    let row = [];  
    for (let j = 1; j <= 10; j++) {  
        row.push(i * j);  
    }
    document.write(row)
    // multiplicationBoard.push(row);  
}


for (let row of multiplicationBoard) {
    document.write(row);
}


let totalSum = 0;
for (let row of multiplicationBoard) {
    for (let num of row) {
        totalSum += num;
    }
}


document.write("the total sum of numbers" + totalSum);
