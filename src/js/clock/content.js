import { dayDiv, timeDiv, seasonImg, weatherImg } from './control';

let data;
function loadData() {
	data = new Date();
}


// Day div content - Day. DD

function getWeekDay() {
	const arr = [
		'sun', 'mon', 'tue', 'thu', 'wed', 'fri', 'sat'
	];
	const int = data.getDay();
	return arr[int];
}

// Capitalize first letter
const formatWeekDay = str => str.charAt(0).toUpperCase() + str.slice(1);

let date;
function setDay() {
	date = data.getDate();
	const weekdayStr = getWeekDay();
	const weekday = formatWeekDay(weekdayStr);

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