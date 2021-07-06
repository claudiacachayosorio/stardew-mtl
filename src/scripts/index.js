// Styles

import '../sass/index.sass';
import $ from '../data/colors.json';

function setCSSvars(data) {
	for (const [name, hex] of Object.entries(data)) {
		document.documentElement.style.setProperty(`--color-${name}`, hex);
	}
}
setCSSvars($);


// Map

import initMap from './map';
import initMarkers from './markers';
import initRecenter from './recenter';
import initClock from './clock/control';
initMap();
initMarkers();
initRecenter();
initClock();