
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1=new box(900,660,200,20)
	box2=new box(800,560,20,200)
	box3=new box(1000,560,20,200)
	
	paper=new paper(30,560,20,20)


	engine = Engine.create();
	world = engine.world;

	


	Engine.run(engine);
  
	if(keyCode===UP_ARROW){
		Matter.Body.applyforce(paperObject.body,paperObject.body.position,{x:-85,y:-85});
	}
}


function draw() {
  rectMode(CENTER);
  background(0);

  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}



