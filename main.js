var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg");
    b=Img;
    b.scaleToWidth(700);
    b.scaleToHeight(510);
    b.set({
        top:0,left:0
    });
    canvas.add(b);
	
}

function playSound(){
	x.play()
}
