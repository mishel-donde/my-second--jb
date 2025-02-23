function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

async function printMessages() {
    console.log("Start");
    
    // זמן נוכחי
    const currentTime = getCurrentTime();
    console.log(currentTime);
    
    console.log("End");
}

// קריאה לפונקציה
printMessages();