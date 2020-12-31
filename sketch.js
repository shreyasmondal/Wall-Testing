var bullet, wall, speed, weight, thickness



function setup() {
  createCanvas(1600, 400);

  weight = random(30, 52)
  speed = random(223, 321)
  thickness = random(22, 83)

  bullet = createSprite(10, 200, 50, 10);
  bullet.shapeColor = "white"
  bullet.velocityX = speed

  wall = createSprite(1200, 200, thickness, height / 2)
  wall.shapeColor = "brown"
}

function draw() {
  background(0);

  detect(bullet,wall)
  
  drawSprites();
}