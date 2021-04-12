
var ground;
var paperBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dbImage = loadImage("dustbeen.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,590,1200,20);

	box1 = new Box(900,570,200,20);
	box2 = new Box(790,520,20,80);
	box3 = new Box(1010,520,20,80);

	

	paper = new Paper(50,570,20);

	//image(dbImage, 900,520, 200, 90);

	Engine.run(engine);



}  

function draw() {
  background(255);


  ground.display();
  box1.display();
  box2.display();
  box3.display(); 
  

  image(dbImage, 780, 430, 260, 150);

  paper.display();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-15})
	} 
	}


