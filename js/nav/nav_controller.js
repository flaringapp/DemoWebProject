const HOME = "index.html";
const CANVAS = "canvas.html";
const HISTOGRAM = "histogram/histogram.html";

const SELF = "_self";

function onHomeClick() {
    window.open(HOME, SELF);
}

function onCanvasClick() {
    window.open(CANVAS, SELF);
}

function onHistogramClick() {
	window.open(HISTOGRAM, SELF);
}