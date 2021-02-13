
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3; 
var chain1, chain2, chain3; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(400, 100, 600,30);
	bob2 = new Bob(400,400);
	bob1 = new Bob(350,400);
	bob3 = new Bob(450,400);
	chain1 = new Chain(bob1.body, roof.body, -10, 0);
	chain2 = new Chain(bob2.body, roof.body, -10, 0);
	chain3 = new Chain(bob3.body, roof.body, -10, 0);
}


function draw() {
  background(55);

  roof.display();
  bob2.display();
  bob1.display();
  bob3.display();
  chain1.display();
  chain2.display();
  chain3.display();
}



