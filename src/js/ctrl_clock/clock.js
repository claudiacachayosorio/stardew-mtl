import initControl from './control';
import setDay from './day';
import { setTime, updateClock } from './time';
import setSeason from './season';
import setWeather from './weather';


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