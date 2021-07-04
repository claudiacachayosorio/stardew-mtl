import { map } from './map';
import data from '../data/markers.json';


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

export const busMarker = formatStartingPoint(data);

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