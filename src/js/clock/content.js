import { dayDiv, timeDiv, seasonImg, weatherImg } from './control';


let data;
function loadData() {
	data = new Date();
}


// Day div content - Day. DD

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

let date;
function setDay() {
	date = data.getDate();
	const weekday = getWeekDay();
	dayDiv.innerHTML = `${weekday}. ${date}`;
}


// Time div - (H)H:MM

function getMinutes() {
	let minInt = data.getMinutes();
	// format minutes as always :MM
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

function setTime() {
	getTime();
	timeDiv.innerHTML = `${hours}:${minutes}`;
}


// Update time

function handleTimeUpdate() {
	loadData();
	setTime();
}

const updateInterval = 30000;
function updateTime() {
	setInterval(handleTimeUpdate, updateInterval);
}


// Images

const pngDir = './assets/';

// Season image

let season;
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

function setSeasonIcon() {
	const icon = `${pngDir}${season}.png`;
	seasonImg.setAttribute('src', icon);
};

function setSeason() {
	getSeason();
	setSeasonIcon();
}

// Weather image

let weatherTypes = [
	'sun',
	'rain', // absent on winter
	'storm' // absent on winter
]

function getWinterWeather() {
	if (season === 'winter') {
		// remove storm
		weatherTypes.pop();
		// replace rain with snow
		weatherTypes[1] = 'snow';
	}
}

function getWeather() {
	const i = Math.floor(Math.random() * weatherTypes.length);
	return weatherTypes[i];
}

function setWeatherIcon(weather) {
	const icon = `${pngDir}${weather}.png`;
	weatherImg.setAttribute('src', icon);
};

function setWeather() {
	// check if winter
	getWinterWeather();
	// set weather
	const weather = getWeather();
	setWeatherIcon(weather);
}


// Initialize all content

export default function setContent() {
	loadData();
	setDay();
	setTime();
	updateTime();
	setSeason();
	setWeather();
}