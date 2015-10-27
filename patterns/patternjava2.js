Logoish.init();

speed(300)
lineColor("cornflowerblue")

function diamond(size){
	for(var x=0; x<4; x++){
		rotate (-90);
		skip (80);
		rotate (180);
	forward (size);
	rotate (-70);
	forward (size);
	rotate (-110);
	forward (size);
	rotate (-70);
	forward (size);
	rotate (-20);
	skip (50);
	rotate (-90);
	
	}
	skip(10);
	
}

for( var x=30; x<460; x=x+20){
	diamond(x);
	
}

