function nice(callback) {
	callback(42);
}

function displayNumber(number) {
    console.log(number);
}

nice(displayNumber);