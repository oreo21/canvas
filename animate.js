//model for HTML5 canvas-based animation

//access canvas and buttons via DOM
var c = document.getElementById("playground");
var startButton = document.getElementById("start");
var stopButton = document.getElementById( "stop" );

//prepare to interact with canvas in 2D
var ctx = c.getContext("2d");

//set fill color to lello
ctx.fillStyle = "#ffff00";


var requestID;


var clear = function(e) {
    e.preventDefault();
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


//tie click-on-canvas to anime function
//c.addEventListener( "click", anime )

startButton.addEventListener("click", anime);
stopButton.addEventListener( "click",  stopIt);
