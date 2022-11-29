//Create a reference for canvas 

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
	greencar_imageTag.src = greencar_image;


}

function uploadBackground() {
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);


}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag, greencar_x, greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y = 10;
		console.log("when up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

