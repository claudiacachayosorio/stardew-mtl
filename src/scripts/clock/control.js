import { map } from '../map';
import setContent from './content';

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
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(outerDiv);
}

export default function initClock() {
	initMapControl();
	setContent();
}