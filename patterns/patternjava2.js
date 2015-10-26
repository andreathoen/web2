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


diamond(30);
diamond(50);
diamond(70);
diamond(90);
diamond(100);
diamond(110);
diamond(130);
diamond(150);
diamond(170);
diamond(190);
diamond(200);
diamond(220);
diamond(240);
diamond(260);
diamond(280);
diamond(300);
diamond(320);
diamond(340);
diamond(360);
diamond(380);
diamond(400);
diamond(420);
diamond(440);
diamond(460);

