var runner, runner_running;
var path;
var bomb, bombImg;
function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(1425,805);
  //create a path
  path = createSprite(695,200,200,200);
  path.addImage(pathImg);
  path.velocityY=6;
  path.scale=1.5;

  //create a runner
  runner = createSprite(700,700,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.1;

  // create invisible ground-1
  invGround = createSprite(480,400,20,800)
  invGround.visible = false
  invGround2 = createSprite(925,400,20,800)
  invGround2.visible = false
}

function draw() {
  background("cyan");

  if (path.y >= 400){
    path.y = path.width/2;
  }

  runner.x = World.mouseX;

  runner.collide(invGround);
  runner.collide(invGround2);
  
  drawSprites();
}
