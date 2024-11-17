function displayStringRepeatedly(str) {
    for (let i = 0; i < 10; i++) {
        document.write(str + "<br>");

    }
} 


displayStringRepeatedly("Hard-Coded");


let userInput = prompt("enter a num ");
displayStringRepeatedly(userInput);
