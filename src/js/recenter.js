import { map, mapCenter } from './map';
import { busMarker } from './markers';


// HTML ELEMENT

const img = document.createElement('img');

img.setAttribute('src', busMarker.icon.url);
img.className = 'map-ctrl recenter i'
img.hidden = true;

// functionality
const handleClick = () => map.setCenter(mapCenter);
img.addEventListener('click', handleClick);


// GENERATE CONTROL

function createControl() {
	const div = document.createElement('div');
	div.appendChild(img);
	map.controls[google.maps.ControlPosition.LEFT_TOP].push(div);
}

// mapCenter coordinates => LatLng obj
const centerLatLng = new google.maps.LatLng(mapCenter);

// toggle hidden attr if mapCenter is out of current bounds
function handleChange() {
	const currBounds = map.getBounds();
	const isCenterInBounds = currBounds.contains(centerLatLng);
	img.hidden = isCenterInBounds;
}


// INTIALIZE

export default function initRecenter() {
	createControl();
	map.addListener('center_changed', handleChange);
}