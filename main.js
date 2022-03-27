function preload(){

}


function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

   

}
function draw(){
    image(video,0,0,640,480);
    circle(50,50,100);
    circle(100,50,100);
    circle(150,50,100);
    circle(200,50,100);
    circle(250,50,100);
    circle(300,50,100);
    circle(350,50,100);
    circle(400,50,100);
    circle(450,50,100);
    circle(500,50,100);
    circle(550,50,100);
    circle(600,50,100);
    circle(600,100,100);
    circle(600,150,100);
    circle(600,200,100);
    circle(600,250,100);
    circle(600,300,100);
    circle(600,350,100);
    circle(600,400,100);
    circle(600,450,100);
    circle(600,500,100);
    circle(50,100,100);
    circle(50,150,100);
    circle(50,200,100);
    circle(50,250,100);
    circle(50,300,100);
    circle(50,350,100);
    circle(50,400,100);
    circle(50,450,100);
    circle(50,500,100);
    fill(255,0,0);
 


    
}
function take_snapshot(){
    save("picture.png");

}

