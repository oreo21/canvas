var b = document.getElementById("clearB");
var c = document.getElementById("slate");
var colors = ["#d35400", "#3498db", "#f1c40f", "#8e44ad", "#c0392b", "#95a5a6", "#1abc9c", "#e74c3c"];


var ctx = c.getContext("2d");
ctx.beginPath();

var clearCanvas = function(e){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.beginPath();
}

var drawRect = function(e){
  var x = e.offsetX, y = e.offsetY;
	var rectWidth = (Math.random() * 50) + 10, rectHeight = (Math.random() * 50) + 10;
	var pos = Math.round(Math.random() * colors.length);
	ctx.fillStyle = colors[pos];
	ctx.fillRect(x, y, x + rectWidth, y - rectHeight);
}

var drawNodev1 = function(e){
  var x = e.offsetX, y = e.offsetY;
  var pos = Math.round(Math.random() * colors.length);
  ctx.fillStyle = colors[pos];
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();
}

var drawNodev2 = function(e){
  var x = e.offsetX, y = e.offsetY;

  ctx.fillStyle = "#000000";
  ctx.lineTo(x, y);
  ctx.stroke();

  var pos = Math.round(Math.random() * colors.length);
  ctx.fillStyle = colors[pos];
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(x, y);
}

c.addEventListener("click", drawNodev2);
b.addEventListener("click", clearCanvas);
