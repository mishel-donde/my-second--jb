let number;

while (true) {
    
    number = prompt('enter a number');

   
    if (number <= 0) {
        break;
    }
    for (let i = 2; i <=number; i+=2) {
        document.write(i);
    }
}


