import initData from '../data/markers.json';

function scaleBus(busMarker) {
	const icon = busMarker.icon;
	icon.scaledSize = {
		width: icon.png.width / 6,
		height: icon.png.height / 6
	}
}

function scaleIcons(dataArr) {
	for (let i = 1; i < dataArr.length; i++) {
		const icon = dataArr[i].icon;
		const defaultHeight = 90;
		icon.scaledSize = {
			width: icon.png.width / icon.png.height * defaultHeight,
			height: defaultHeight
		}
	}
}

function formatMarkers(dataArr) {
	const outputData = dataArr.slice();

	// scale icons
	scaleBus(outputData[0]);
	scaleIcons(outputData);

	// add properties to all
	outputData.forEach((data, i) => {
		const marker = dataArr[i];
		const png = require(`../assets/png/markers/${data.icon.png.fn}.png`);
		marker.icon.url = png;
		marker.icon.optimized = false;
		delete marker.icon.png;
	});

	return outputData;
}

export const data = formatMarkers(initData);