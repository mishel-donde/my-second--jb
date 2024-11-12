let number;

while (true) {
    
    number = prompt('enter a number');

   
    if (number <= 0) {
        break;
    }
    for (let i = 1; i <= number; i++) {
        document.write(i);
    }
}


