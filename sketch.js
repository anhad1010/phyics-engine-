const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var eng,wrld;
var ground,ball;

function setup() {

  createCanvas(800,400);
  eng=Engine.create();
  wrld=eng.wrld;
  
  var ground_options={
   isStatic:true

  }
 ground=Bodies.rectangle(200,390,200,20,ground_options);
 World.add(wrld,ground);
 
 var ball_options={
  restitution=1.0;
 }

 ball=Bodies.circle(200,100,20,ball_options);
 World.add(wrld,ball);

}

function draw() {
  background(255,255,255); 
  Engine.update(eng);
  
  rectMode(CENTER);
  rect(ground.postion.x,ground.postion.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.postion.x,ball.postion,y,20,20);
  drawSprites();
}