// add a box around the title for the emojis
var title = document.body.querySelector("#title");
title.outerHTML = '<span id="titlebox"><span>🎵</span><div id="titlegradient"><p id="title">&nbsp;</p></div><span>🎵</span></span>';

// add a box around the artist for the emojis
var artist = document.body.querySelector("#artist");
artist.outerHTML = '<span id="artistbox"><span>🎤</span><div id="artistgradient"><p id="artist">&nbsp;</p></div><span>🎤</span></span>';

// make the timeline text 0:00 - 1:30 copy progress colors
var observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutationRecord) {
		changecolors();
		checktextwrap();
	});
});

// COMMENT THIS OUT TO DISABLE COLOR MATCHING TEXT
observer.observe(document.querySelector("#progress"), { attributes: true, attributeFilter: ["style"] });

function changecolors() {
	var bgcolor = rgba2hex(document.querySelector("#progress").style.backgroundColor);
	var inbgcolor = invertColor(bgcolor.slice(0, -2)) + bgcolor.slice(-2);
	document.querySelectorAll("#length, #time-passed, #title, #artist").forEach((element) => {
		element.style = "color: " + bgcolor + "; text-shadow: 0 0 7px " + inbgcolor + ", 0 0 10px " + inbgcolor;
	});
}

function checktextwrap() {
	var titletext = document.querySelector("#title")
	if (isOverflown(titletext)) {
		titletext.classList.add("marquee")
	}
	var artisttext = document.querySelector("#artist")
	if (isOverflown(artisttext)) {
		artisttext.classList.add("marquee")
	}
}

function isOverflown(element) {
	const elementWidth = element.getBoundingClientRect().width
	const parentWidth = element.parentElement.getBoundingClientRect().width

	return elementWidth > parentWidth
}

// stolen from https://stackoverflow.com/questions/49974145/how-to-convert-rgba-to-hex-color-code-using-javascript
function rgba2hex(orig) {
	var a,
		isPercent,
		rgb = orig.replace(/\s/g, "").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
		alpha = ((rgb && rgb[4]) || "").trim(),
		hex = rgb ? (rgb[1] | (1 << 8)).toString(16).slice(1) + (rgb[2] | (1 << 8)).toString(16).slice(1) + (rgb[3] | (1 << 8)).toString(16).slice(1) : orig;

	if (alpha !== "") {
		a = alpha;
	} else {
		a = 0o1;
	}
	// multiply before convert to HEX
	a = ((a * 255) | (1 << 8)).toString(16).slice(1);
	hex = hex + a;

	return "#" + hex;
}

// stolen from https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
function invertColor(hex) {
	if (hex.indexOf("#") === 0) {
		hex = hex.slice(1);
	}
	// convert 3-digit hex to 6-digits.
	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}
	if (hex.length !== 6) {
		console.log("Invalid HEX color.");
		return "#000000";
	}
	// invert color components
	var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
		g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
		b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
	// pad each with zeros and return
	return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
	len = len || 2;
	var zeros = new Array(len).join("0");
	return (zeros + str).slice(-len);
}