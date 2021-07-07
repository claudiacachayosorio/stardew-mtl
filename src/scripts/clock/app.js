import { html } from './control';

let dateObj;
function loadData() {
	dateObj = new Date();
}


// Day div content - Day. DD

function getWeekDay() {
	const arr = [
		'sun', 'mon', 'tue', 'thu', 'wed', 'fri', 'sat'
	];
	const int = dateObj.getDay();
	return arr[int];
}

// Capitalize first letter
const formatWeekDay = str => str.charAt(0).toUpperCase() + str.slice(1);

let date;
function setDay() {
	date = dateObj.getDate();
	const weekdayStr = getWeekDay();
	const weekday = formatWeekDay(weekdayStr);
	html.dayDiv.innerHTML = `${weekday}. ${date}`;
}


// Time div - (H)H:MM

function getMinutes() {
	let minInt = dateObj.getMinutes();
	// format minutes as always :MM
	return minInt < 10
		? `0${minInt}`
		: minInt;
}

let hours,
	minutes;
function getTime() {
	hours	= dateObj.getHours();
	minutes	= getMinutes();
}

function setTime() {
	getTime();
	html.timeDiv.innerHTML = `${hours}:${minutes}`;
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

// Season image

let season;
function getSeason() {
	const month = dateObj.getMonth();
	const arr = [ 'winter', 'spring', 'summer', 'fall' ];

	switch (month) {
		case 11:	//dec
		case 0:		//jan
		case 1:		//feb
			return season = arr[0];
	
		case 2:		//mar
		case 3:		//apr
		case 4:		//may
			return season = arr[1];
	
		case 5:		//jun
		case 6:		//jul
		case 7:		//aug
			return season = arr[2];

		case 8:		//sep
		case 9:		//oct
		case 10:	//nov
			return season = arr[3];
	}
}

function setSeasonIcon() {
	const icon = require(`../../assets/png/clock/${season}.png`);
	html.seasonImg.setAttribute('src', icon);
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
	const icon = require(`../../assets/png/clock/${weather}.png`);
	html.weatherImg.setAttribute('src', icon);
};

function setWeather() {
	// check if winter
	getWinterWeather();
	// set weather
	const weather = getWeather();
	setWeatherIcon(weather);
}


// Initialize all content

export default function initApp() {
	loadData();
	setDay();
	setTime();
	updateTime();
	setSeason();
	setWeather();
}