

region1State = 0;
region2State = 0;
region3State = 0;
labelCircle1 = 'S';
labelCircle2 = 'P';
circleColor = 150;
markingsColor = 'lightblue';
labelsColor = 'lightblue';
backgroundColor = 'white';
labelsSize = 30;


typeA = 'All ' + labelCircle1 + ' are ' + labelCircle2 + '.';
typeE = 'No ' + labelCircle1 + ' are ' + labelCircle2 + '.';
typeI = 'Some ' + labelCircle1 + ' are ' + labelCircle2 + '.';
typeO = 'Some ' + labelCircle1 + ' are not ' + labelCircle2 + '.'

function setup() {
  createCanvas(360, 270);
  textAlign(CENTER, CENTER);

function changeMouseCursor() {
	let d1 = dist(mouseX, mouseY, 120, 120);
	let d2 = dist(mouseX, mouseY, 240, 120);
	if ((d1 < 100 && d2 > 100) || (d1 < 100 && d2 < 100) || (d1 > 100 && d2 < 100)) {
		cursor(HAND);
	}
	else {
		cursor(ARROW);
	}
}

// Draws the two Venn Diagram circles
function drawCircles() {
	strokeWeight(3);
	stroke(circleColor);
	fill(255, 255, 255, 0);
	circle(120, 120, 100);
	circle(240, 120, 100);
}

// Draws one-character labels for each circle
function drawLabels(){
	textSize(labelsSize);
	strokeWeight(1);
	stroke(labelsColor);
	fill(labelsColor);
	text(labelCircle1, 30, 210);
	text(labelCircle2, 330, 210);
}

// Draws markings for region 1
function drawRegion1() {
	var i;
	fill(markingsColor);
	stroke(markingsColor);
	if (region1State == 1) {
		for (i = 0; i < 200; i++) {
			if ((240 - Math.sqrt(100 ** 2 - i ** 2)) < (120 + Math.sqrt(100 ** 2 - i ** 2))) {
				line((240 - Math.sqrt(100 ** 2 - i ** 2)), 120 + i, (120 - Math.sqrt(100 ** 2 - i ** 2)), 120 + i);
				line((240 - Math.sqrt(100 ** 2 - i ** 2)), 120 - i, (120 - Math.sqrt(100 ** 2 - i ** 2)), 120 - i);
			}
			else {
				line((120 + Math.sqrt(100 ** 2 - i ** 2)), 120 + i, (120 - Math.sqrt(100 ** 2 - i ** 2)), 120 + i);
				line((120 + Math.sqrt(100 ** 2 - i ** 2)), 120 - i, (120 - Math.sqrt(100 ** 2 - i ** 2)), 120 - i);
			}
		}
	}
	else if (region1State == 2){
		textSize(40);
		text('X', 90, 120);
	}
}

//Draws markings for region 2
function drawRegion2() {
	var i;
	fill(markingsColor);
	stroke(markingsColor);
	if (region2State == 1) {
		for (i = 0; i < 200; i++) {
			if ((120 + Math.sqrt(100 ** 2 - i ** 2)) > (240 - Math.sqrt(100 ** 2 - i ** 2))) {
				line((120 + Math.sqrt(100 ** 2 - i ** 2)), 120 + i, (240 - Math.sqrt(100 ** 2 - i ** 2)), 120 + i);
				line((120 + Math.sqrt(100 ** 2 - i ** 2)), 120 - i, (240 - Math.sqrt(100 ** 2 - i ** 2)), 120 - i);
			}

		}
	}
	else if (region2State == 2){
		textSize(40);
		text('X', 180, 120);
	}
}

// Draws markings for region 3
function drawRegion3() {
	var i;
	fill(markingsColor);
	stroke(markingsColor);
	if (region3State == 1) {
		for (i = 0; i < 200; i++) {
			if ((240 - Math.sqrt(100 ** 2 - i ** 2)) > (120 + Math.sqrt(100 ** 2 - i ** 2))) {
				line((240 + Math.sqrt(100 ** 2 - i ** 2)), 120 + i, (240 - Math.sqrt(100 ** 2 - i ** 2)), 120 + i);
				line((240 + Math.sqrt(100 ** 2 - i ** 2)), 120 - i, (240 - Math.sqrt(100 ** 2 - i ** 2)), 120 - i);
			}
			else {
				line((240 + Math.sqrt(100 ** 2 - i ** 2)), 120 + i, (120 + Math.sqrt(100 ** 2 - i ** 2)), 120 + i);
				line((240 + Math.sqrt(100 ** 2 - i ** 2)), 120 - i, (120 + Math.sqrt(100 ** 2 - i ** 2)), 120 - i);
			}
		}
	}
	else if (region3State == 2){
		textSize(40);
		text('X', 270, 120);
	}
}

// Reports statement form whenever user inputs a Venn digaram for a type A, E, I, or O categorical statement.
function reportStatementType() {
	textSize(30);
	strokeWeight(1);
	fill(150);
	if (region1State == 1 && region2State == 0 && region3State == 0) {
		text(typeA, 180, 250);
	}
	else if (region1State == 0 && region2State == 1 && region3State == 0) {
		text(typeE, 180, 250);
	}
	else if (region1State == 0 && region2State == 2 && region3State == 0) {
		text(typeI, 180, 250);
	}
	else if (region1State == 2 && region2State == 0 && region3State == 0) {
		text(typeO, 180, 250);
	}
}

// Main drawing loop draws circles and region markings
function draw() {
	// put drawing code here
	background(backgroundColor);
	changeMouseCursor();
	drawCircles();
	drawLabels();
	drawRegion1();
	drawRegion2();
	drawRegion3();
	drawCircles();
	reportStatementType();
}

// Listens for mouse click in any of the three Venn regions and increments region1State, region2State, or region3State
function mousePressed() {
	let d1 = dist(mouseX, mouseY, 120, 120);
	let d2 = dist(mouseX, mouseY, 240, 120);
	if (d1 < 100 && d2 > 100) {
		if (region1State < 2) {
			region1State++;
		}
		else {
			region1State = 0;
		}
	}

	if (d1 < 100 && d2 < 100) {
		if (region2State < 2) {
			region2State++;
		}
		else {
			region2State = 0;
		}
	}

	if (d1 > 100 && d2 < 100) {
		if (region3State < 2) {
			region3State++;
		}
		else {
			region3State = 0;
		}
	}
}
