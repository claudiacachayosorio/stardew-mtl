import { map } from './map';
import { data } from './data';


// Markers

let markers = [];

function generateMarkers() {
	data.forEach(obj => {
		const marker = new google.maps.Marker(obj);
		marker.setMap(map);
		markers.push(marker);
	});
}


// Infowindow

const infowindow = new google.maps.InfoWindow();

// actions on click
function openInfo(currMarker) {
	infowindow.setContent(currMarker.title);
	infowindow.open(map, currMarker);
}
function closeInfo() {
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


// Initialize

export default function initMarkers() {
	generateMarkers();
	initInfoWindow();
};