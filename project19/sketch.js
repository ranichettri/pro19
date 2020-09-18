var banana,obstacle,jungle,monkey,ground,count;
var bananaImage,obstacleImage,jungleImage,monkey_animat;
var score,bananaGroup , obstacleGroup,monkey_end;
var END=0,PLAY=1,gamestate=PLAY;

function preload(){
jungleImage=loadImage("jungle.jpg");
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
  
monkey_animat=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");  
  monkey_end=loadImage("Monkey_11.png");
}

function setup() {
  createCanvas(600, 300);
  
  jungle=createSprite(501.5,1);
  jungle.addImage(jungleImage);
  jungle.scale=1.191;
  jungle.x = jungle.width/2;
  jungle.velocityX=-5;
  
  monkey=createSprite(190,240,10,10);
  monkey.addAnimation("runing",monkey_animat);
  monkey.addImage("end", monkey_end);
  monkey.scale=0.1;
  
  ground=createSprite(300,250,600,10);
  ground.visible=false;
  
  bananaGroup=new Group();
  
  obstacleGroup=new Group();
  score=0;
  count=0;
  
}

function draw() {
  
  background(0);
  
   if(gamestate===PLAY){
     
     monkey.velocityY=monkey.velocityY+0.6;
     
     if(jungle.x < 0){
      jungle.x = jungle.width/2;
     }
     
     if(keyDown("space") &&  monkey.y > 214 ){
       monkey.velocityY=-14;
       }
     
     
     if(bananaGroup.isTouching(monkey)){
       score=score+2;
       bananaGroup.destroyEach();  
      }
     
     jump();
     size();
     spawnBanana();
     spawnObstacle();
     
     if(monkey.isTouching(obstacleGroup)){
       monkey.scale=0.1;
       obstacleGroup.destroyEach();
       count=count+1;
     }
     
     if(count===2){
     gamestate=END;
     }
    
   }
   
   if(gamestate===END){
      jungle.velocityX=0;
      obstacleGroup.setVelocityEach(0,0);
      bananaGroup.setVelocityEach(0,0);
      obstacleGroup.destroyEach();
      bananaGroup.destroyEach();
      obstacleGroup.setLifetimeEach(-1);
      bananaGroup.setLifetimeEach(-1);
      monkey.changeImage("end", monkey_end);
      monkey.scale=1;
      monkey.velocityY=0;
   }
  
  monkey.collide(ground);
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,20);
}

function spawnBanana(){
if(World.frameCount % 80 === 0){
    var banana = createSprite(600,random(50,120),10,10);
    banana.addImage(bananaImage);
    banana.scale=0.05;
    banana.velocityX=-5;
    banana.lifetime=125;
    banana.setCollider("rectangle",0,0,90,50,0);
    bananaGroup.add(banana);
  }

}

function spawnObstacle(){
   if(World.frameCount % 200 === 0){
    var obstacle = createSprite(600,230,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.19;
    obstacle.velocityX=-5;
    obstacle.lifetime=125;
    obstacleGroup.add(obstacle);
    obstacle.setCollider("rectangle",0,0,90,50,0); 
}
}

function jump(){

  if(monkey.scale===0.12){
     if(keyDown("space") &&  monkey.y > 208 ){
       monkey.velocityY=-14;
     }
   }

  if(monkey.scale===0.14){
     if(keyDown("space") &&  monkey.y > 202 ){
       monkey.velocityY=-14;
     }
   }

  if(monkey.scale===0.16){
     if(keyDown("space") &&  monkey.y > 195 ){
       monkey.velocityY=-14;
     }
   }
  
  if(monkey.scale===0.18){
     if(keyDown("space") &&  monkey.y > 189 ){
       monkey.velocityY=-14;
     }
   }
  
  if(monkey.scale===0.2){
     if(keyDown("space") &&  monkey.y > 183 ){
       monkey.velocityY=-14;
     }
   }
  
  if(monkey.scale===0.22){
     if(keyDown("space") &&  monkey.y > 177 ){
       monkey.velocityY=-14;
     }
   }
  
}

function size(){
 switch(score){
    case 10: monkey.scale=0.12;
            break;
    case 20: monkey.scale=0.14;
            break;
    case 30: monkey.scale=0.16;
            break;
    case 40: monkey.scale=0.18;
            break; 
    case 50: monkey.scale=0.2;
            break; 
    case 100: monkey.scale=0.22;
            break;         
    default:break  ;      
  }
}
