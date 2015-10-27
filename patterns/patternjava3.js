Logoish.init();

speed(300)

var colorArray = ["oldlace","mistyrose","lightpink","pink","salmon","darksalmon","lightcoral","indianred","crimson","darkred","firebrick","maroon","brown"];

function star(){
	for(var x=0; x<18; x++){
	forward (70);
	rotate (130);
	forward (70);
	rotate (-70);
	rotate (-40);
	skip (10);
	}
}
function movestar(){
	for(var x=0; x<12; x++){
	lineColor(colorArray[x]);
	star();
	rotate(-30)
	skip(30)
	}
}

movestar()



