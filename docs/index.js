/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "default": () => (/* binding */ initMap)
/* harmony export */ });
/* harmony import */ var _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _marker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);




// map options

const styles = [
	{ elementType: 'labels',							stylers: [{ visibility: 'off' }] },
	{ featureType: 'road.local',						stylers: [{ visibility: "off" }] },
	{ featureType: 'transit.line',						stylers: [{ visibility: 'off' }] },
	{ featureType: 'transit.station.rail',				stylers: [{ visibility: 'off' }] },

	{ featureType: 'all',								stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.soildark }] },
	{ featureType: 'landscape',							stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.grass }] },
	{ featureType: 'water',								stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.water }] },
	{ featureType: 'poi',								stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.pavement }] },
	{ featureType: 'poi.park',							stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.grassdark }] },
	{ featureType: 'road.arterial',						stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.soil }] },
	{ featureType: 'road.highway',						stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.roadmarking }] },
	{ featureType: 'road.highway.controlled_access',	stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.road }] },
	{ featureType: 'transit.station.airport',			stylers: [{ color: _sass_color_module_sass__WEBPACK_IMPORTED_MODULE_0__.default.pavement }] },
];

const mapOptions = {
	center: _marker_data__WEBPACK_IMPORTED_MODULE_1__.mapCenter,
	zoom: 14,
	disableDefaultUI: true,
	styles: styles
};


// initialize

let map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
};

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"soil":"#e9d65d","soildark":"#e5bb51","soildarker":"#e09947","pavement":"#66797f","pavementlight":"#6c996e","road":"#485b4c","roadborder":"#324135","roadmarking":"#607966","grass":"#40c51b","grassdark":"#3ea031","water":"#3c82c3","waterlight":"#49ccdd","waterdark":"#37549e"});

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapCenter": () => (/* binding */ mapCenter),
/* harmony export */   "busIcon": () => (/* binding */ busIcon),
/* harmony export */   "markerData": () => (/* binding */ markerData)
/* harmony export */ });
// MARKER CONSTRUCTOR

const dir = '../assets/copy/';

class Marker {
	constructor(title, lat, lng, iconFn, iconWidth, iconHeight) {
		this.title = title;
		this.position = { lat, lng };
		this.icon = {
			url: `${dir}${iconFn}.png`,
			scaledSize: { width: iconWidth, height: iconHeight }
		};
		this.optimized = false;
	}
};

// icon scaling
const defaultHeight = 90;
const scaleWidth = (pngWidth, pngHeight) => pngWidth / pngHeight * defaultHeight;


// MAP STARTING POINT

const startingPoint = new Marker(
	"Welcome!",
	45.446387508733245, -73.7414325471116,
	'bus',
	512/6, 255/6
);

const mapCenter = startingPoint.position;
const busIcon = startingPoint.icon.url;


// ALL MARKERS
//- title
//- lat, lng
//- iconFn
//- iconWidth, iconHeight

const markerData = [
	startingPoint,

	new Marker(
		"Montréal-Trudeau Airport",
		45.466151244756595, -73.7456076958713,
		'jojamart',
		scaleWidth(384, 312), defaultHeight
	),

	new Marker(
		"Cra-terre Garden",
		45.52658588605292, -73.6171524003503,
		'witchs_hut',
		scaleWidth(336, 279), defaultHeight
	),

	new Marker(
		"Montréal, arts interculturels",
		45.51153320551439, -73.5761720027772,
		'oasis',
		scaleWidth(508, 664), defaultHeight
	),

	new Marker(
		"Jean-Talon Market",
		45.536395052797445, -73.61421428613065,
		'pierres_shop',
		scaleWidth(322, 320), defaultHeight
	),

	new Marker(
		"Place Versailles",
		45.59255738667644, -73.54073498928062,
		'hat_shop',
		scaleWidth(508, 535), defaultHeight
	),

	new Marker(
		"Biodôme",
		45.5597821824346, -73.54994420832364,
		'leahs_cottage',
		scaleWidth(447, 378), defaultHeight
	),

	new Marker(
		"Botanical Garden",
		45.55999426718373, -73.56299817393943,
		'ranch',
		scaleWidth(1152, 632), defaultHeight
	),

	new Marker(
		"La Fontaine Park",
		45.524517998162835, -73.56850027237539,
		'coop',
		scaleWidth(384, 436), defaultHeight
	),

	new Marker(
		"Jarry Park",
		45.53425977877009, -73.6283952866005,
		'trailer_large',
		scaleWidth(384, 399), defaultHeight
	),

	new Marker(
		"Racines Bookstore",
		45.53630158476484, -73.60382224510487,
		'community_center',
		scaleWidth(384, 320), defaultHeight
	),

	new Marker(
		"L'Euguélionne Bookstore",
		45.51898338320269, -73.55640264135363,
		'saloon',
		scaleWidth(396, 435), defaultHeight
	),

	new Marker(
		"Grande Bibliothèque",
		45.51524100060111, -73.56165316127093,
		'mayors_manor',
		scaleWidth(576, 896), defaultHeight
	),

	new Marker(
		"Museum of Fine Arts",
		45.498528203258694, -73.57947864398147,
		'museum',
		scaleWidth(576, 512), defaultHeight
	),

	new Marker(
		"SPCA Montréal",
		45.496031389370245, -73.65200322848719,
		'1_river_road',
		scaleWidth(568, 640), defaultHeight
	),

	new Marker(
		"Mont Royal",
		45.506321671332806, -73.58794237518575,
		'tent',
		scaleWidth(192, 384), defaultHeight
	),

	new Marker(
		"Science Centre",
		45.50516360342, -73.55034073496597,
		'elliotts_cabin',
		scaleWidth(320, 448), defaultHeight
	),

	new Marker(
		"Old Port",
		45.51540682467202, -73.54669927023373,
		'fish_shop',
		scaleWidth(444, 459), defaultHeight
	),
];

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initMarkers)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _marker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);




// CREATE MARKERS

let markers = [];

// data array => Marker obj
function generateMarkers() {
	_marker_data__WEBPACK_IMPORTED_MODULE_1__.markerData.forEach(data => {
		const marker = new google.maps.Marker(data);
		marker.setMap(_map__WEBPACK_IMPORTED_MODULE_0__.map);
		markers.push(marker);
	});
}


// INFOWINDOW

const infowindow = new google.maps.InfoWindow();

// actions on click
const openInfo = currMarker => {
	infowindow.setContent(currMarker.title);
	infowindow.open(_map__WEBPACK_IMPORTED_MODULE_0__.map, currMarker);
}
const closeInfo = () => {
	infowindow.close();
	infowindow.setContent("");
}

// swap content depending on marker
function setContent(currMarker) {
	infowindow.getContent() !== currMarker.title
		? openInfo(currMarker)
		: closeInfo();
}

// event listeners
function initInfoWindow() {
	markers.forEach(marker => {
		marker.addListener('click', () => setContent(marker));
	});
}


// INITIALIZE

function initMarkers() {
	generateMarkers();
	initInfoWindow();
};

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initRecenter)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _marker_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);




// HTML ELEMENT

const img = document.createElement('img');

img.setAttribute('src', _marker_data__WEBPACK_IMPORTED_MODULE_1__.busIcon);
img.className = 'map-ctrl recenter i'
img.hidden = true;

// functionality
const handleClick = () => _map__WEBPACK_IMPORTED_MODULE_0__.map.setCenter(_marker_data__WEBPACK_IMPORTED_MODULE_1__.mapCenter);
img.addEventListener('click', handleClick);


// GENERATE CONTROL

function createControl() {
	const div = document.createElement('div');
	div.appendChild(img);
	_map__WEBPACK_IMPORTED_MODULE_0__.map.controls[google.maps.ControlPosition.LEFT_TOP].push(div);
}

// mapCenter coordinates => LatLng obj
const centerLatLng = new google.maps.LatLng(_marker_data__WEBPACK_IMPORTED_MODULE_1__.mapCenter);

// toggle hidden attr if mapCenter is out of current bounds
function handleChange() {
	const currBounds = _map__WEBPACK_IMPORTED_MODULE_0__.map.getBounds();
	const isCenterInBounds = currBounds.contains(centerLatLng);
	img.hidden = isCenterInBounds;
}


// INTIALIZE

function initRecenter() {
	createControl();
	_map__WEBPACK_IMPORTED_MODULE_0__.map.addListener('center_changed', handleChange);
}

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "innerDiv": () => (/* binding */ innerDiv),
/* harmony export */   "dayDiv": () => (/* binding */ dayDiv),
/* harmony export */   "timeDiv": () => (/* binding */ timeDiv),
/* harmony export */   "iconsDiv": () => (/* binding */ iconsDiv),
/* harmony export */   "weatherImg": () => (/* binding */ weatherImg),
/* harmony export */   "seasonImg": () => (/* binding */ seasonImg),
/* harmony export */   "default": () => (/* binding */ initClock)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



let
	innerDiv,
	dayDiv,
	timeDiv,
	iconsDiv,
	weatherImg,
	seasonImg;

function createElements() {
	innerDiv	= document.createElement('div'),
	dayDiv		= document.createElement('div'),
	iconsDiv	= document.createElement('div'),
	timeDiv		= document.createElement('div'),
	weatherImg	= document.createElement('img'),
	seasonImg	= document.createElement('img');
}

function setClasses() {
	innerDiv.className		= 'map-ctrl clock';
	dayDiv.className		= 'clock-day';
	timeDiv.className		= 'clock-time';
	iconsDiv.className		= 'clock-i';
	weatherImg.className	= 'i-weather';
	seasonImg.className		= 'i-season';
}

function appendElements() {
	iconsDiv.appendChild(weatherImg);
	iconsDiv.appendChild(seasonImg);

	innerDiv.appendChild(dayDiv);
	innerDiv.appendChild(iconsDiv);
	innerDiv.appendChild(timeDiv);
}

function initInnerElements() {
	createElements();
	setClasses();
	appendElements();
}

function initOuterDiv() {
	const outerDiv = document.createElement('div');
	outerDiv.appendChild(innerDiv);
	return outerDiv;
}

function initMapControl() {
	initInnerElements();
	const outerDiv = initOuterDiv();
	_map__WEBPACK_IMPORTED_MODULE_0__.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(outerDiv);
}

function initClock() {
	initMapControl();
	(0,_content__WEBPACK_IMPORTED_MODULE_1__.default)();
}

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setContent)
/* harmony export */ });
/* harmony import */ var _control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);



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
	_control__WEBPACK_IMPORTED_MODULE_0__.dayDiv.innerHTML = `${weekday}. ${date}`;
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
	_control__WEBPACK_IMPORTED_MODULE_0__.timeDiv.innerHTML = `${hours}:${minutes}`;
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

const pngDir = '../../assets/copy/';

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
	_control__WEBPACK_IMPORTED_MODULE_0__.seasonImg.setAttribute('src', icon);
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
	_control__WEBPACK_IMPORTED_MODULE_0__.weatherImg.setAttribute('src', icon);
};

function setWeather() {
	// check if winter
	getWinterWeather();
	// set weather
	const weather = getWeather();
	setWeatherIcon(weather);
}


// Initialize all content

function setContent() {
	loadData();
	setDay();
	setTime();
	updateTime();
	setSeason();
	setWeather();
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _recenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _clock_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
// Assets


// Map




(0,_map__WEBPACK_IMPORTED_MODULE_1__.default)();
(0,_markers__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_recenter__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_clock_control__WEBPACK_IMPORTED_MODULE_4__.default)();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map