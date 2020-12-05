
var bullet,wall;
var wallHealth,speed,damage,weight;
var deform;
function setup() {
  createCanvas(1600,1600);
  speed = random(223,321);
  wallHealth = random(22,90);
  weight = random(30,52);
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1500,200,wallHealth,height/2);
  wall.shapeColor=color(50,50,50);
}

function draw() {
  
  background(255,255,255);  

  
 
bullet.velocityX = speed;
 if(wall.x - bullet.x < bullet.width/2 + wall.width/2  ){
  bullet.velocityX = 0;
  
  deform = (0.5*weight*speed*speed)/(wallHealth*wallHealth*wallHealth);
if(deform > 3){
wall.shapeColor=color(255,0,0);
}
if(deform <=3){
    wall.shapeColor=color(0,255,0); 
  }
 }
 drawSprites();

}