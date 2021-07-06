import { map } from './map';
import data from '../data/markers.json';


// Scale icons

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
	const png = require(`../assets/png/locations/${starter.icon.fn}.png`);
	starter.icon = {
		url: png,
		scaledSize: scaleBus(starter.icon.width, starter.icon.height)
	};
	starter.optimized = false;
	return starter;
}

export const busMarker = formatStartingPoint(data);

// all markers

function formatMarkers(dataArr) {
	for (let i = 1; i < dataArr.length; i++) {
		const marker = dataArr[i];
		const png = require(`../assets/png/locations/${marker.icon.fn}.png`);
		marker.icon = {
			url: png,
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
	formatMarkers(data);
	data.forEach(obj => {
		const marker = new google.maps.Marker(obj);
		marker.setMap(map);
		markers.push(marker);
	});
}


// INFOWINDOW

const infowindow = new google.maps.InfoWindow();

// actions on click
const openInfo = currMarker => {
	infowindow.setContent(currMarker.title);
	infowindow.open(map, currMarker);
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

export default function initMarkers() {
	generateMarkers();
	initInfoWindow();
};