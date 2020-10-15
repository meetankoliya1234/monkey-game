var survivalTime=0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,400);
  
  ground=createSprite(250,395,1000,10);
  ground.velocityX=-5;
  ground.x = ground.width /2;
  
  monkey=createSprite(70,200,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
 
  
  
  
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background(225);
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y >= 250){
    monkey.velocityY=-10;
  }

 monkey.velocityY=monkey.velocityY+0.8; 
  
 monkey.collide(ground);
  
  
  stroke("red");
  textSize(20);
  fill("orange");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("red");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time:"+survivalTime,100,50);
  
  if(obstacleGroup.isTouching(monkey)){
     reset();

     }
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
  food();
  rock();
  
  
  
  drawSprites();
}

function food(){
  
  if(frameCount%80===0){
   var banana=createSprite(400,200,20,20);
   banana.addAnimation("we",bananaImage);
   banana.velocityX=-7;
   banana.setLifetime=100;
   banana.scale=0.1;
   banana.y=Math.round(random(200,310));
   foodGroup.add(banana);
     
     }
  
  
}

function rock(){
  
  if(frameCount%300===0){
     var obstacle=createSprite(500,354,20,20);
     obstacle.addAnimation("rock",obstacleImage);
     obstacle.scale=0.2;
     obstacle.velocityX=-7;
     obstacle.setLifetime=200;
    obstacleGroup.add(obstacle);
  }
  
}

function reset(){
  
  obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
     foodGroup.setVelocityXEach(0);
  
  survivalTime=0;
  
}
