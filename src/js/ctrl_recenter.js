import { map } from './map';
import { mapCenter, busIcon } from './marker_data';


// HTML ELEMENT

const img = document.createElement('img');

img.setAttribute('src', busIcon);
img.hidden = true;

// styles
img.style.width = '100px';
img.style.margin = '15px';
img.style.cursor = 'pointer';
img.style.filter = 'drop-shadow(1.5px 1.5px 1.5px #000)';

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