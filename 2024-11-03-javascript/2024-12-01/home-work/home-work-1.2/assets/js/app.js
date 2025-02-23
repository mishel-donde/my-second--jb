function cool(callback) {
	callback();
}

function displayRandomNumber() {
    console.log(Math.random());
}


cool(displayRandomNumber);
