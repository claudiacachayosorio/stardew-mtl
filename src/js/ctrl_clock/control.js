import { map } from '../map';


// CREATE INNER ELEMENTS

export let
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


// CUSTOMIZE ELEMENTS

// set classes
function setClasses() {
	innerDiv.className		= 'map-ctrl clock';
	dayDiv.className		= 'clock-day';
	timeDiv.className		= 'clock-time';
	iconsDiv.className		= 'clock-i';
	weatherImg.className	= 'i-weather';
	seasonImg.className		= 'i-season';
}

// default content
const weatherImgSrc = 'assets/png/clock/sun.png';
const seasonImgSrc	= 'assets/png/clock/spring.png';

function setDefaultContent() {
	weatherImg.setAttribute('src', weatherImgSrc);
	seasonImg.setAttribute('src', seasonImgSrc);
	dayDiv.innerHTML = 'day';
	timeDiv.innerHTML = 'time';
}

// elements structure
function appendElements() {
	iconsDiv.appendChild(weatherImg);
	iconsDiv.appendChild(seasonImg);

	innerDiv.appendChild(dayDiv);
	innerDiv.appendChild(iconsDiv);
	innerDiv.appendChild(timeDiv);
}


// GENERATE CONTAINERS

// generate inner div
function createClock() {
	createElements();
	setDefaultContent();
	setClasses();
	appendElements();
}

// generate outer div
function createOuterDiv() {
	const outerDiv = document.createElement('div');
	outerDiv.appendChild(innerDiv);
	return outerDiv;
}


// INITIALIZE

export default function initControl() {
	createClock();
	const outerDiv = createOuterDiv();
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(outerDiv);
}