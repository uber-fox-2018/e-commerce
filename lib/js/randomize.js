function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function theChosenOne(arrOfSomething) {
	let luckyNumber = getRandomInt(arrOfSomething.length);
	return arrOfSomething[luckyNumber];
}