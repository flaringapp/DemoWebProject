const _canvas = document.getElementById("canvas");

const BG_COLOR = "transparent";
const BODY_COLOR = "#70D78C";
const EYE_COLOR = "white"

const TOTAL_SIZE = 125

const R = 40;

const EAR_LENGTH = 15;
const EAR_WIDTH = 3;
const EAR_ANGLE = degreesToRadians(30);

const EAR_START_X = Math.sin(EAR_ANGLE) * R;
const EAR_START_Y = - Math.cos(EAR_ANGLE) * R;
const EAR_END_X = EAR_START_X + Math.sin(EAR_ANGLE) * EAR_LENGTH;
const EAR_END_Y = EAR_START_Y - Math.cos(EAR_ANGLE) * EAR_LENGTH;

const EYE_X = R / 2.5;
const EYE_Y = - R * 0.4; 
const EYE_SIZE = 4;

document.addEventListener("DOMContentLoaded", function() {
    draw();
});

draw();

function draw() {
    var ctx = _canvas.getContext("2d");
	ctx.translate(0.5, 0.5);

    ctx.canvas.width = _canvas.clientWidth;
    ctx.canvas.height = _canvas.clientHeight;

    ctx.fillStyle = BG_COLOR;
    drawBg(ctx);

    let cx = TOTAL_SIZE / 2;
    let cy = TOTAL_SIZE / 2;

    let scale = Math.min(ctx.canvas.width / TOTAL_SIZE, ctx.canvas.height / TOTAL_SIZE);
    ctx.scale(scale, scale);

	ctx.fillStyle = BODY_COLOR;
	ctx.lineCap = "butt";

    drawBody(ctx, cx, cy);

	ctx.strokeStyle = BODY_COLOR;
	ctx.lineCap = "round";
	ctx.lineWidth = EAR_WIDTH;

    drawLeftEar(ctx, cx, cy);
    drawRightEar(ctx, cx, cy);

	ctx.fillStyle = EYE_COLOR;
	ctx.lineWidth = 0;

    drawLeftEye(ctx, cx, cy)
    drawRightEye(ctx, cx, cy)
}

function drawBg(ctx) {
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function drawBody(ctx, cx, cy) {
    ctx.beginPath();
    ctx.arc(cx, cy, R, Math.PI, 0);
    ctx.closePath();
    ctx.fill();
}

function drawLeftEar(ctx, cx, cy) {
    ctx.beginPath();
    ctx.moveTo(cx + EAR_START_X, cy + EAR_START_Y);
    ctx.lineTo(cx + EAR_END_X, cy + EAR_END_Y);
    ctx.stroke();
}


function drawRightEar(ctx, cx, cy) {
    ctx.beginPath();
    ctx.moveTo(cx - EAR_START_X, cy + EAR_START_Y);
    ctx.lineTo(cx - EAR_END_X, cy + EAR_END_Y);
    ctx.stroke();
}

function drawLeftEye(ctx, cx, cy) {
	ctx.beginPath();
	ctx.arc(cx - EYE_X, cy + EYE_Y, EYE_SIZE, 0, 2 * Math.PI);
	ctx.fill();
}

function drawRightEye(ctx, cx, cy) {
	ctx.beginPath();
	ctx.arc(cx + EYE_X, cy + EYE_Y, EYE_SIZE, 0, 2 * Math.PI);
	ctx.fill();
}

function degreesToRadians(degrees)
{
  var pi = Math.PI;
    return degrees * (pi / 180);
}