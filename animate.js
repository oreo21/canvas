var c = document.getElementById("slate");
var startButton = document.getElementById("start-btn");
var stopButton = document.getElementById("stop-btn");
var colors = ["#d35400", "#3498db", "#f1c40f", "#8e44ad", "#c0392b", "#95a5a6", "#1abc9c", "#e74c3c"];

var ctx = c.getContext("2d");
ctx.fillStyle = "#ffff00";


var requestID;


var clear = function(e) {
    ctx.clearRect(0, 0, 500, 500);
};


//wrapper function will allow inner function to keep track of
// its own complement of local variables (radius, xcor...)
var anime = function() {

    window.cancelAnimationFrame( requestID );

    console.log(requestID);

    //init params for drawing dot
    var radius = 50;
    var xcor = c.width / 2;
    var ycor = c.height / 2;
    var growing = true;


    //Q: what happens w/ & w/o next line?
    //window.cancelAnimationFrame( requestID );

    var drawDot = function() {
	console.log( requestID );

	ctx.clearRect( 0, 0, c.width, c.height );
	ctx.beginPath();
	ctx.arc( xcor, ycor, radius, 0, 2 * Math.PI );
	ctx.stroke();
	ctx.fill();
	if (growing == true) radius++;
	if (growing == false) radius--;
	requestID = window.requestAnimationFrame( drawDot );
    };
    drawDot();
    if ((radius == (c.width / 2)) || (radius == (c.height / 2)))
	growing = false;
    if (radius == 0)
	growing = true;
};

var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame( requestID );

};

startButton.addEventListener("click", anime);
stopButton.addEventListener( "click",  stopIt);
