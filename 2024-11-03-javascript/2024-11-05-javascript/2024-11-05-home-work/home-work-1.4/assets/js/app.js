let number;

while (true) {
    
    number = prompt('enter a number');

    if(number<=0){
        break;
    }
   
    if (number % 2 !==0) {
        continue;
    }document.write('\n')

    for (let i = number; i >=number; i-=2) {
        document.write(i);
    }
}


