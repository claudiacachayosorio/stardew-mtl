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
/***/ ((module) => {

module.exports = JSON.parse('{"text":"#3c262b","title":"#e7b012","frame":"#923e08","heart":"#d93500","bg-light":"#5edceb","bg-lighter":"#93fedb","bg-medium":"#259bfd","bg-dark":"#0261bb","bg-darker":"#023b7e","textbox":"#fdbd6f","textbox-dark":"#d8a06f","textbox-border":"#fa9305","textbox-border-inner":"#b14e05","textbox-border-outer":"#853605","soil":"#e9d65d","soil-dark":"#e5bb51","soil-darker":"#e09947","pavement":"#66797f","pavement-light":"#6c996e","road":"#485b4c","road-border":"#324135","road-marking":"#607966","grass":"#40c51b","grass-dark":"#3ea031","water":"#3c82c3","water-light":"#49ccdd","water-dark":"#37549e","tree":"#0d7e2c","tree-light":"#12a92b","tree-dark":"#09543b","wood":"#775c25","cliff":"#787843","cliff-light":"#8e8e55","cliff-dark":"#686023","cliff-darker":"#544d39","mountain":"#acbe9a","mountain-dark":"#799e88","mountain-top":"#dde0ee","mountain-top-dark":"#bdc2da","mountain-border":"#576196","clock":"#ffd787","clock-border":"#f7ba00","clock-center":"#dc7b05","clock-center-border":"#f7ba00"}');

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapCenter": () => (/* binding */ mapCenter),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "default": () => (/* binding */ initMap)
/* harmony export */ });
/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);




// map options

const styles = [
	{ elementType: 'labels',							stylers: [{ visibility: 'off' }] },
	{ featureType: 'road.local',						stylers: [{ visibility: "off" }] },
	{ featureType: 'transit.line',						stylers: [{ visibility: 'off' }] },
	{ featureType: 'transit.station.rail',				stylers: [{ visibility: 'off' }] },

	{ featureType: 'all',								stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__["soil-dark"] }] },
	{ featureType: 'landscape',							stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__.grass }] },
	{ featureType: 'water',								stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__.water }] },
	{ featureType: 'poi',								stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__.pavement }] },
	{ featureType: 'poi.park',							stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__["grass-dark"] }] },
	{ featureType: 'road.arterial',						stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__.soil }] },
	{ featureType: 'road.highway',						stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__["road-marking"] }] },
	{ featureType: 'road.highway.controlled_access',	stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__.road }] },
	{ featureType: 'transit.station.airport',			stylers: [{ color: _data_colors_json__WEBPACK_IMPORTED_MODULE_0__.pavement }] },
];

const mapCenter = _markers__WEBPACK_IMPORTED_MODULE_1__.busMarker.position;

const mapOptions = {
	center: mapCenter,
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
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "busMarker": () => (/* binding */ busMarker),
/* harmony export */   "default": () => (/* binding */ initMarkers)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _data_markers_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);




// FORMAT DATA

function getIconUrl(iconFn) {
	const dir = './assets/';
	return `${dir}${iconFn}.png`;
}

function scaleBus(pngWidth, pngHeight) {
	return {
		width: pngWidth / 6,
		height: pngHeight / 6
	}
}

function scaleIcon(pngWidth, pngHeight) {
	const defaultHeight = 90;
	return {
		width: pngWidth / pngHeight * defaultHeight,
		height: defaultHeight
	}
}

// starting point

function formatStartingPoint(dataArr) {
	const starter = dataArr[0];
	starter.icon = {
		url: getIconUrl(starter.icon.fn),
		scaledSize: scaleBus(starter.icon.width, starter.icon.height)
	};
	starter.optimized = false;
	return starter;
}

const busMarker = formatStartingPoint(_data_markers_json__WEBPACK_IMPORTED_MODULE_1__);

// all markers

function formatMarkers(dataArr) {
	for (let i = 1; i < dataArr.length; i++) {
		const marker = dataArr[i];
		marker.icon = {
			url: getIconUrl(marker.icon.fn),
			scaledSize: scaleIcon(marker.icon.width, marker.icon.height)
		};
		marker.optimized = false;
	}
	return dataArr;
}


// CREATE MARKERS

let markers = [];

// data array => marker obj
function generateMarkers() {
	formatMarkers(_data_markers_json__WEBPACK_IMPORTED_MODULE_1__);
	_data_markers_json__WEBPACK_IMPORTED_MODULE_1__.forEach(obj => {
		const marker = new google.maps.Marker(obj);
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
/* 5 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Welcome!","position":{"lat":45.446387508733245,"lng":-73.7414325471116},"icon":{"fn":"bus","width":512,"height":255}},{"title":"Montréal-Trudeau Airport","position":{"lat":45.466151244756595,"lng":-73.7456076958713},"icon":{"fn":"jojamart","width":384,"height":312}},{"title":"Cra-terre Garden","position":{"lat":45.52658588605292,"lng":-73.6171524003503},"icon":{"fn":"witchs_hut","width":336,"height":279}},{"title":"Biodôme","position":{"lat":45.5597821824346,"lng":-73.54994420832364},"icon":{"fn":"leahs_cottage","width":447,"height":378}},{"title":"Botanical Garden","position":{"lat":45.55999426718373,"lng":-73.56299817393943},"icon":{"fn":"ranch","width":1152,"height":632}},{"title":"Grande Bibliothèque","position":{"lat":45.51524100060111,"lng":-73.56165316127093},"icon":{"fn":"mayors_manor","width":576,"height":896}},{"title":"Jarry Park","position":{"lat":45.53425977877009,"lng":-73.6283952866005},"icon":{"fn":"trailer_large","width":384,"height":399}},{"title":"Jean-Talon Market","position":{"lat":45.536395052797445,"lng":-73.61421428613065},"icon":{"fn":"pierres_shop","width":322,"height":320}},{"title":"La Fontaine Park","position":{"lat":45.524517998162835,"lng":-73.56850027237539},"icon":{"fn":"coop","width":384,"height":436}},{"title":"L\'Euguélionne Bookstore","position":{"lat":45.51898338320269,"lng":-73.55640264135363},"icon":{"fn":"saloon","width":396,"height":435}},{"title":"Montréal, arts interculturels","position":{"lat":45.51153320551439,"lng":-73.5761720027772},"icon":{"fn":"oasis","width":508,"height":664}},{"title":"Mont Royal","position":{"lat":45.506321671332806,"lng":-73.58794237518575},"icon":{"fn":"tent","width":192,"height":384}},{"title":"Museum of Fine Arts","position":{"lat":45.498528203258694,"lng":-73.57947864398147},"icon":{"fn":"museum","width":576,"height":512}},{"title":"Old port","position":{"lat":45.51540682467202,"lng":-73.54669927023373},"icon":{"fn":"fish_shop","width":444,"height":459}},{"title":"Place Versailles","position":{"lat":45.59255738667644,"lng":-73.54073498928062},"icon":{"fn":"hat_shop","width":508,"height":535}},{"title":"Racines Bookstore","position":{"lat":45.53630158476484,"lng":-73.60382224510487},"icon":{"fn":"community_center","width":384,"height":320}},{"title":"SPCA Montréal","position":{"lat":45.496031389370245,"lng":-73.65200322848719},"icon":{"fn":"1_river_road","width":568,"height":640}},{"title":"Science Center","position":{"lat":45.50516360342,"lng":-73.55034073496597},"icon":{"fn":"elliotts_cabin","width":320,"height":448}}]');

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initRecenter)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);




// HTML ELEMENT

const img = document.createElement('img');

img.setAttribute('src', _markers__WEBPACK_IMPORTED_MODULE_1__.busMarker.icon.url);
img.className = 'map-ctrl recenter i'
img.hidden = true;

// functionality
const handleClick = () => _map__WEBPACK_IMPORTED_MODULE_0__.map.setCenter(_map__WEBPACK_IMPORTED_MODULE_0__.mapCenter);
img.addEventListener('click', handleClick);


// GENERATE CONTROL

function createControl() {
	const div = document.createElement('div');
	div.appendChild(img);
	_map__WEBPACK_IMPORTED_MODULE_0__.map.controls[google.maps.ControlPosition.LEFT_TOP].push(div);
}

// mapCenter coordinates => LatLng obj
const centerLatLng = new google.maps.LatLng(_map__WEBPACK_IMPORTED_MODULE_0__.mapCenter);

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
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
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
/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _recenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _clock_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
// Styles




function setCSSvars(data) {
	for (const [name, hex] of Object.entries(data)) {
		document.documentElement.style.setProperty(`--color-${name}`, hex);
	}
}
setCSSvars(_data_colors_json__WEBPACK_IMPORTED_MODULE_1__);


// Map





(0,_map__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_markers__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_recenter__WEBPACK_IMPORTED_MODULE_4__.default)();
(0,_clock_control__WEBPACK_IMPORTED_MODULE_5__.default)();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map