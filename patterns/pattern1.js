Logoish.init();

speed(300);



var colorArray = ["cornsilk","lightgoldenrodyellow","khaki","gold","orange"];



function hexagon(){
	skip(20);
	rotate(90);
	forward(10);
	for (var x=0; x<5; x++){
		rotate (-60);
		forward (20);
	}
	rotate (-60);
	forward (10);
	rotate (90);
	skip (20);
	rotate (240);
	
}

function hexagonhive(){
  for(var x=0; x<6; x++){
   hexagon();
  }
}
  
function drawrow (rowlength){
    for(var x=0; x<rowlength; x++){
  	  hexagonhive();
  	  rotate (90);
  	  skip (96);
  	  rotate (-90);
  	  skip (20);

    }
}

function movehive (){
	var x=60; 
	var y=60;  
	var rowlength=5;
	
	for( var i=0; i<5; i++) {
		lineColor(colorArray[i]);
		moveTo (x,y);
		drawrow(rowlength);
		x=x-30;
		y=y+93;
		rowlength=rowlength+1;
	}
}

movehive();





