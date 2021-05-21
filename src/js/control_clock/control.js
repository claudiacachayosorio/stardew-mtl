import { map } from '../map.js';


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