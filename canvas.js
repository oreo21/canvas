var button = document.getElementById("clearB");

var makeCanvas = function(e){
    var c = document.getElementById("slate");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(50,50,100,200);
}

var clearCanvas = function(e){
    var c = document.getElementById("slate");
    var ctx = c.getContext("2d");
    ctx.clearRect(50,50,100,200);
}

button.addListener('click', clearCanvas);
