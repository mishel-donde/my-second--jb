let number;

while (true) {
    
    number = prompt('enter a number');

   
    if (number <= 0) {
        break;
    }
    for (let i = number; i >= 1; i--) {
        document.write(i);
    }
}


