const HOME = "index.html";
const CANVAS = "canvas.html";
const HISTOGRAM = "histogram.html";
const CONTACTS = "contacts.html";
const FEEDBACK = "feedback.html";
const CITIES = "cities.html";

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

function onContactsClick() {
	window.open(CONTACTS, SELF);
}

function onFeedbackClick() {
	window.open(FEEDBACK, SELF);
}

function onCitiesClick() {
	window.open(CITIES, SELF);
}
