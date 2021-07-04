const $ = require('../data/colors.json');

function setCSSvars(data) {
	for (const [name, hex] of Object.entries(data)) {
		document.documentElement.style.setProperty(`--color-${name}`, hex);
	}
}

setCSSvars($);