
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1 = new roof(400,300,300,15)

	bob1 = new Bob(400,500,50,50)
	bob2 = new Bob(350,500,50,50)
	bob3 = new Bob(300,500,50,50)
	bob4 = new Bob(450,500,50,50)
	bob5 = new Bob(500,500,50,50)

  rope1 = new rope(bob1.body,roof1.body);
  rope2 = new rope(bob2.body,roof1.body-50);
  rope3 = new rope(bob3.body,roof1.body-100);
  rope4 = new rope(bob4.body,roof1.body+50);
  rope5 = new rope(bob5.body,roof1.body+100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);



  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display();
  rope2.display();

  drawSprites();
 
}



