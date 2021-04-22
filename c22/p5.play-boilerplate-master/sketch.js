const Bodies = Matter.Bodies
const World =Matter.World
const Engine = Matter.Engine 




function setup() {
  createCanvas(800,400);
  
 engine = Engine.create()
world =engine.world

var options = {
  isStatic :true
} 
ground = Bodies.rectangle(400, 390, 800, 20, options)
World.add(world,ground)

var options={
  restitution : 2
}
ball=Bodies.circle(100, 100, 50, options)
World.add(world,ball)
}

function draw(){
  background("green");  
Engine.update(engine)  
  rectMode(CENTER);

rect(ground.position.x,ground.position.y, 800,20 )
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50,50)
  drawSprites();
}