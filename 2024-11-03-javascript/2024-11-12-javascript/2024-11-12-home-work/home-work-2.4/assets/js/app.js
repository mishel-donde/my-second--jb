function displayMessage(message ,times) {
    for (let i = 0; i < times; i++) {
        document.write(message + "<br>");

    }
} 


displayMessage("Hard-Coded message" ,5);

let userMessage= prompt('enter a message')
let userTimes=parseInt(prompt('how much time show the message'))
displayMessage(userMessage, userTimes);
