var car,wall;
var weight,speed;
var deformation;
function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  car.shapeColor = 'white';
  car.weight = random(400,1500);
  car.speed = random(30,95);


  wall = createSprite(1500,200,60,400);
  wall.shapeColor=color(80,80,80);


}

function draw() {
  background('black');  
  deformation = (0.5 * car.weight * car.speed * car.speed)/22500;
  console.log(deformation);
  if(car.isTouching(wall)){
    if(deformation<100)
    {
      car.shapeColor = color(0,255,0);
    }
    if(deformation >=100 && deformation <=180)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation>180)
    {
      car.shapeColor = color(255,0,0);
    }
}
  car.velocityX=car.speed/10;
  car.collide(wall);
  drawSprites();
}