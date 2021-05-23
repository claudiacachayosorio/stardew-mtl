// MARKER CONSTRUCTOR

const dir = './assets/copy/';

class Marker {
	constructor(title, lat, lng, iconFn, iconWidth, iconHeight) {
		this.title = title;
		this.position = { lat, lng };
		this.icon = {
			url: `${dir}${iconFn}.png`,
			scaledSize: { width: iconWidth, height: iconHeight }
		};
		this.optimized = false;
	}
};

// icon scaling
const defaultHeight = 90;
const scaleWidth = (pngWidth, pngHeight) => pngWidth / pngHeight * defaultHeight;


// MAP STARTING POINT

const startingPoint = new Marker(
	"Welcome!",
	45.446387508733245, -73.7414325471116,
	'bus',
	512/6, 255/6
);

export const mapCenter = startingPoint.position;
export const busIcon = startingPoint.icon.url;


// ALL MARKERS
//- title
//- lat, lng
//- iconFn
//- iconWidth, iconHeight

export const markerData = [
	startingPoint,

	new Marker(
		"Montréal-Trudeau Airport",
		45.466151244756595, -73.7456076958713,
		'jojamart',
		scaleWidth(384, 312), defaultHeight
	),

	new Marker(
		"Cra-terre Garden",
		45.52658588605292, -73.6171524003503,
		'witchs_hut',
		scaleWidth(336, 279), defaultHeight
	),

	new Marker(
		"Montréal, arts interculturels",
		45.51153320551439, -73.5761720027772,
		'oasis',
		scaleWidth(508, 664), defaultHeight
	),

	new Marker(
		"Jean-Talon Market",
		45.536395052797445, -73.61421428613065,
		'pierres_shop',
		scaleWidth(322, 320), defaultHeight
	),

	new Marker(
		"Place Versailles",
		45.59255738667644, -73.54073498928062,
		'hat_shop',
		scaleWidth(508, 535), defaultHeight
	),

	new Marker(
		"Biodôme",
		45.5597821824346, -73.54994420832364,
		'leahs_cottage',
		scaleWidth(447, 378), defaultHeight
	),

	new Marker(
		"Botanical Garden",
		45.55999426718373, -73.56299817393943,
		'ranch',
		scaleWidth(1152, 632), defaultHeight
	),

	new Marker(
		"La Fontaine Park",
		45.524517998162835, -73.56850027237539,
		'coop',
		scaleWidth(384, 436), defaultHeight
	),

	new Marker(
		"Jarry Park",
		45.53425977877009, -73.6283952866005,
		'trailer_large',
		scaleWidth(384, 399), defaultHeight
	),

	new Marker(
		"Racines Bookstore",
		45.53630158476484, -73.60382224510487,
		'community_center',
		scaleWidth(384, 320), defaultHeight
	),

	new Marker(
		"L'Euguélionne Bookstore",
		45.51898338320269, -73.55640264135363,
		'saloon',
		scaleWidth(396, 435), defaultHeight
	),

	new Marker(
		"Grande Bibliothèque",
		45.51524100060111, -73.56165316127093,
		'mayors_manor',
		scaleWidth(576, 896), defaultHeight
	),

	new Marker(
		"Museum of Fine Arts",
		45.498528203258694, -73.57947864398147,
		'museum',
		scaleWidth(576, 512), defaultHeight
	),

	new Marker(
		"SPCA Montréal",
		45.496031389370245, -73.65200322848719,
		'1_river_road',
		scaleWidth(568, 640), defaultHeight
	),

	new Marker(
		"Mont Royal",
		45.506321671332806, -73.58794237518575,
		'tent',
		scaleWidth(192, 384), defaultHeight
	),

	new Marker(
		"Science Centre",
		45.50516360342, -73.55034073496597,
		'elliotts_cabin',
		scaleWidth(320, 448), defaultHeight
	),

	new Marker(
		"Old Port",
		45.51540682467202, -73.54669927023373,
		'fish_shop',
		scaleWidth(444, 459), defaultHeight
	),
];