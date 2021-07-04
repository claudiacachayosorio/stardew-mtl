import $ from '../data/colors.json';
import { mapCenter } from './marker-data';


// map options

const styles = [
	{ elementType: 'labels',							stylers: [{ visibility: 'off' }] },
	{ featureType: 'road.local',						stylers: [{ visibility: "off" }] },
	{ featureType: 'transit.line',						stylers: [{ visibility: 'off' }] },
	{ featureType: 'transit.station.rail',				stylers: [{ visibility: 'off' }] },

	{ featureType: 'all',								stylers: [{ color: $["soil-dark"] }] },
	{ featureType: 'landscape',							stylers: [{ color: $["grass"] }] },
	{ featureType: 'water',								stylers: [{ color: $["water"] }] },
	{ featureType: 'poi',								stylers: [{ color: $["pavement"] }] },
	{ featureType: 'poi.park',							stylers: [{ color: $["grass-dark"] }] },
	{ featureType: 'road.arterial',						stylers: [{ color: $["soil"] }] },
	{ featureType: 'road.highway',						stylers: [{ color: $["road-marking"] }] },
	{ featureType: 'road.highway.controlled_access',	stylers: [{ color: $["road"] }] },
	{ featureType: 'transit.station.airport',			stylers: [{ color: $["pavement"] }] },
];

const mapOptions = {
	center: mapCenter,
	zoom: 14,
	disableDefaultUI: true,
	styles: styles
};


// initialize

export let map;
export default function initMap() {
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
};