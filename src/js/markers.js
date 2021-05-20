import { map } from './map.js';
import { markerData } from './marker_data.js';


// CREATE MARKERS

let markers = [];

// data array => Marker obj
function generateMarkers() {
	markerData.forEach(data => {
		const marker = new google.maps.Marker(data);
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