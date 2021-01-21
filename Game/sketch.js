const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var background,backgroundImg




function preload() {
  backgroundImg = loadImage ("City.jpg");
  obstacleImg = loadImage ("Building.png");
  obstacleImg1 = loadImage ("Building 2.png");
}

function setup() {
  createCanvas(1200,700);
  background = createSprite (600, 350,1200,700);
  background.addImage(backgroundImg)
  background.scale = 0.3
  ground = createSprite (600,500,1200,15);
  SpwanBuilding();
}

function draw() {
  drawSprites();
} 

function SpwanBuilding(){
   if(frameCount%100===0){
     Building = createSprite(600,425,1200,700)
     Building.addImage(obstacleImg);
     Building.scale = 0.2
     Building.velocityX = -5
   }

}