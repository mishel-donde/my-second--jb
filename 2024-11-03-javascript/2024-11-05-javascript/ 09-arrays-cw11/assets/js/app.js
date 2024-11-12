const grades =[]; 

for(let i = 1 ; i <= 12; i++ ) {
   
   grades.push(parseInt(Math.random() * 101));
}

document.write(`${grades}<br>`)
document.write(`${grades[0]}<br>`)
document.write(`${grades[4]}<br>`)

for(const grade of grades){
    document.write(`${grade}<br>`)
}

grades[1] -= 5;
document.write(`${grades}<br>`)

let sum=0 

for(const grade of grades){
    sum+=grade;
}


document.write(`the average grade is <br> ${sum/grades.length}`)

let max = 0;
for(const grade of grades){
    max = grade > max? grade:max ;
}

document.write(`the max grade is <br> ${max}`)

