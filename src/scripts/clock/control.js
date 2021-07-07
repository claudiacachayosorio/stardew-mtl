import { map } from '../map';

export const html = {
	innerDiv:	document.createElement('div'),
	dayDiv:		document.createElement('div'),
	iconsDiv:	document.createElement('div'),
	timeDiv:	document.createElement('div'),
	weatherImg:	document.createElement('img'),
	seasonImg:	document.createElement('img')
};

function setClasses() {
	html.innerDiv.className		= 'map-ctrl clock';
	html.dayDiv.className		= 'clock-day';
	html.timeDiv.className		= 'clock-time';
	html.iconsDiv.className		= 'clock-i';
	html.weatherImg.className	= 'i-weather';
	html.seasonImg.className	= 'i-season';
}

function appendElements() {
	html.iconsDiv.appendChild(html.weatherImg);
	html.iconsDiv.appendChild(html.seasonImg);

	html.innerDiv.appendChild(html.dayDiv);
	html.innerDiv.appendChild(html.iconsDiv);
	html.innerDiv.appendChild(html.timeDiv);
}

function setInnerElements() {
	setClasses();
	appendElements();
}

function initOuterDiv() {
	const outerDiv = document.createElement('div');
	outerDiv.appendChild(html.innerDiv);
	return outerDiv;
}

export default function initMapControl() {
	setInnerElements();
	const outerDiv = initOuterDiv();
	map.controls[google.maps.ControlPosition.RIGHT_TOP].push(outerDiv);
}