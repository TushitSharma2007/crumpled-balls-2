var groundObject;
var rightSide;
var leftSide;
var bottomSide;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject=new ground(width/2,670,width,20);
	rightSide=new Dustbin(600,620,20,80);
	leftSide=new Dustbin(500,620,20,80);
	bottomSide=new Dustbin(550,650,120,20)
	ball=new Paper(200,400,12);
}


function draw() { 
  Engine.update(engine);
  background(0);
  rectMode(CENTER);
  groundObject.display();
  rightSide.display();
  leftSide.display();
  bottomSide.display();
  ball.display();
  console.log(ball.body.position.x,ball.body.position.y);
  keyPressed(); 
 }

 function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.0001,y:-0.0007});
	 }
 } 