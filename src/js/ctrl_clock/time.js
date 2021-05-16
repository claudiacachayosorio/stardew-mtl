import { data, loadData } from './clock';
import { timeDiv } from './control';


// GET DATA

function getMinutes() {
	let minInt = data.getMinutes();

	// format minutes :MM
	return minInt < 10
		? `0${minInt}`
		: minInt;
}

let hours,
	minutes;

function getTime() {
	hours	= data.getHours();
	minutes	= getMinutes();
}


// SET DATA

export function setTime() {
	getTime();
	timeDiv.innerHTML = `${hours}:${minutes}`;
}


// UPDATE DATA

// callback
function updateTime() {
	loadData();
	setTime();
}

const interval = 30000;

export function updateClock() {
	setInterval(updateTime, interval);
}