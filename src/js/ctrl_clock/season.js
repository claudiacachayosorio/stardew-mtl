import { data } from'./clock.js';
import { date } from './day.js';
import { seasonImg } from './control.js';


// current season

export let season;

function getSeason() {
	const month = data.getMonth();

	switch (month) {
		case 0: //jan
			return season = 'winter';
		case 1: //feb
			return season = 'winter';
		case 2: //mar
			return date < 21
				? season = 'winter'
				: season = 'spring';

		case 3: //apr
			return season = 'spring';
		case 4: //may
			return season = 'spring';
		case 5: //jun
			return date < 21
				? season = 'spring'
				: season = 'summer';

		case 6: //jul
			return season = 'summer';
		case 7: //aug
			return season = 'summer';
		case 8: //sep
			return date < 21
				? season = 'summer'
				: season = 'fall';

		case 9: //oct
			return season = 'fall';
		case 10: //nov
			return season = 'fall';
		case 11: //dec
			return date < 21
				? season = 'fall'
				: season = 'winter';
	}
}


// season icon

const dir = 'assets/png/clock/';
function setIcon() {
	const icon = dir + season + '.png';
	seasonImg.setAttribute('src', icon);
};


// set data

export default function setSeason() {
	getSeason();
	setIcon();
}