var dashPlayer,dashPlayerImage;
var spike1,spike2,spike3;
var spike1Img,spike2Img,spike3Img;
var robot,robotImg;
var background,backgroundImg;
var spikeGroup;
var score,highestScore
var gameState
var PLAY=0
var END=0
var gameState=PLAY;
var jump,die,check;
var x
//var invisibleGround
var ground,groundImage;

function preload(){
dashPlayerImage=loadImage("images/dash_player.png")
spike1Img=loadImage("images/spike1.png")
spike2Img=loadImage("images/spike2.png")
spike3Img=loadImage("images/spike3.png")
robotImg=loadImage("images/robot_(1).png")
backgroundImg=loadImage("images/bg.jpg")
jump=loadSound("jump.mp3")
die=loadSound("die.mp3");
  check=loadSound("checkPoint.mp3");
  gameoverImage=loadImage("gameOver.png");
  restartImage=loadImage("restart.png");
groundImage=loadImage("images/ground2.png")
}
function setup(){

createCanvas(600,200)
x=0

dashPlayer=createSprite(50,180,20,50)
dashPlayer.addImage(dashPlayerImage)
dashPlayer.scale=0.35
//dashPlayer.velocityX=1

spike1=createSprite(150,130)
spike1.addImage(spike1Img)
spike1.scale=0.3

spike2=createSprite(210,138)
spike2.addImage(spike2Img);
spike2.scale=0.6

spike3=createSprite(290,150)
spike3.addImage(spike3Img);
spike3.scale=0.3

ground=createSprite(200,180,400,20)
ground.shapeColor="green"
ground.addImage("ground",groundImage);
ground.x = ground.width/2;
ground.velocityX=-4;

//var invisibleGround2=createSprite(1400,random(450,550),200,20)
//invisibleGround2.shapeColor="green"
//invisibleGround2.visibile=false

//invisibleGround=createSprite(750,700,1500,70)
//invisibleGround.shapeColor="green"
//invisibleGround.visibile=false
}
function draw(){
  background("skyblue")

  if(ground.x<0){
   ground.x=ground.width/2;
  }
  if(keyDown("space") && dashPlayer.y>=130){
    dashPlayer.velocityY=-10
  }
  dashPlayer.velocityY=dashPlayer.velocityY+0.3
   ground .velocityX=-4
  if (ground.x <0){
    ground.x = ground.width/2;
    
 }
    dashPlayer.collide(ground)

    //spike1.collide(invisibleGround)
    //spike2.collide(invisibleGround)
    //spike3.collide(invisibleGround)

drawSprites();
}

