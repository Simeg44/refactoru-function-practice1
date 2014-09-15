function tripleFive() {
	for (i=0; i<3; i++){
		console.log("Five!");
	}
}

function lastLetter(last) {
	return last[last.length - 1];
}

function square(num) {
	return num*num;
}

function negate(num) {
	return -(num);
}

function toArray(item1, item2, item3) {
	var array = [];

	array.push(item1);
	array.push(item2);
	array.push(item3);

	return array;
}

function startsWithA(firstA) {
	if (firstA[0] === "A" || firstA[0] === "a") {
		return true;
	}
	else {
		return false;
	}
}

function excite(pumpUp) {
	return (pumpUp + "!!!")
}

function sun(word) {
	var position = word.indexOf("sun");

	if (position === -1) {
		return false;
	}
	else {
		return true;
	}
}

function tiny(num) {
	if ((num > 0) && (num < 1)) {
		return true;
	}
	else {
		return false;
	}
}



function getSeconds(time) {
	var array = time.split(":");
	var minsInHours = 0;
	var secsInMins = 0;
	var total =0;
	
	if (array.length === 3) {
		minsInHours = parseFloat(array[0]) * 60;
		secsInMins = (parseFloat(array[1]) + minsInHours) * 60;

		total = (secsInMins + parseFloat(array[2]));
	}
	else if (array.length === 2) {
		secsInMins = (parseFloat(array[0]) + minsInHours) * 60;
		total = (secsInMins + parseFloat(array[1]));
	}
	else {
		total = array[0]; 
	}
	return total;
}

// last = prompt("Enter a word: ");
// squareNum = prompt("Enter a number square: ");
// negative = prompt("Enter a number to negate: ");
// item1 = prompt("Enter item 1: ");
// item2 = prompt("Enter item 2: ");
// item3 = prompt("Enter item 3: ");
// firstA = prompt("Enter a word: ");
// pumpUp = prompt("Enter a word to excite: ");
// sunWord = prompt("See if this word contains 'sun': ");
// var tinyNum = prompt("Is this number between 0 and 1?");


var time = prompt("Enter a time in the format HH:MM:SS: ");

while ((!(time[2] === ":") && (time.length > 2)) || (!(time[5] === ":") && (time.length > 5))) {
	time = prompt("That is the incorrect format. Please enter again (HH:MM:SS): ");

}


// tripleFive();
// console.log(lastLetter(last));
// console.log(square(squareNum));
// console.log(negate(negative));
// console.log(item1, item2, item3);
// console.log(startsWithA(firstA));
// console.log(excite(pumpUp));
// console.log(sun(sunWord));
// console.log(tiny(tinyNum));
console.log(getSeconds(time));

