import initControl from './control.js';
import setDay from './day.js';
import { setTime, updateClock } from './time.js';
import setSeason from './season.js';
import setWeather from './weather.js';


// data
export let data;
export function loadData() {
	data = new Date();
}


// initialize
export default function initClock() {
	initControl();
	loadData();
	setDay();
	setTime();
	updateClock();
	setSeason();
	setWeather();
}