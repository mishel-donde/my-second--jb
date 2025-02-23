function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

// פונקציה אסינכרונית שתדפיס את המילים בסדר הנכון
async function printMessages() {
    console.log("Start");
    
    // המתנה אסינכרונית של 3 שניות
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // הדפסת הזמן הנוכחי אחרי 3 שניות
    const currentTime = getCurrentTime();
    console.log(currentTime);
    
    console.log("End");
}

// הרצת הפונקציה האסינכרונית
printMessages();
