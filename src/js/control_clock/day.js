import { data } from './control_clock.js';
import { dayDiv } from './control.js';


// weekday

function getWeekDay() {
	const weekdayInt = data.getDay();
	switch(weekdayInt) {
		case 0:
			return 'Sun';
		case 1:
			return 'Mon';
		case 2:
			return 'Tue';
		case 3:
			return 'Wed';
		case 4:
			return 'Thu';
		case 5:
			return 'Fri';
		case 6:
			return 'Sat';
	}
}


// set data

export let date;

export default function setDay() {
	date = data.getDate();
	const weekday = getWeekDay();

	dayDiv.innerHTML = `${weekday}. ${date}`;
}