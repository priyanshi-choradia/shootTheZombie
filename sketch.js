var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg, zombieGrp

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

  zombieImg = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

  zombieGrp = new Group();
}

function draw() {
  background(0);
  
  

if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}
if(keyDown("LEFT_ARROW")){
  player.x = player.x-30
}
if(keyDown("RIGHT_ARROW")){
  player.x = player.x+30
}

if(keyWentDown("SPACE")){
  player.addImage(shooter_shooting)
}
else if(keyWentUp("SPACE")){
  player.addImage(shooterImg)
}

if(zombieGrp.isTouching(player)){

for(var i = 0;i<zombieGrp.length;i++){

if (zombieGrp[i].isTouching(player)){

 zombieGrp[i].destroy()

}

}

}

spawnZombie();
drawSprites();

}
function spawnZombie(){
  if (frameCount%55 === 0){

    zombie = createSprite(random(1000,2000),random(100,600),10,10)
    zombie.addImage(zombieImg)
    zombie.scale = 0.2

    zombie.velocityX =-3 
    zombie.lifetime = 700

    zombieGrp.add(zombie)

  }
  
}
  