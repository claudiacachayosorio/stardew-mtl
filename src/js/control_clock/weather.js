import { season } from './season.js';
import { weatherImg } from './control.js';


// WEATHER TYPES

// default weather types
let types = [
	'sun',
	'rain', // absent on winter
	'storm' // absent on winter
]

function getWinterTypes() {
	if (season === 'winter') {
		// remove storm
		types.pop();

		// replace rain with snow
		types[1] = 'snow';
	}
}


// GENERATE RANDOM WEATHER

function getWeather() {
	const i = Math.floor(Math.random() * types.length);
	const weather = types[i];
	return weather;
}


// ICON

const dir = '../../assets/copy/';
function setIcon(weather) {
	const icon = `${dir}${weather}.png`;
	weatherImg.setAttribute('src', icon);
};


// SET DATA

export default function setWeather() {
	// if winter
	getWinterTypes();

	// set weather
	const weather = getWeather();
	setIcon(weather);
}