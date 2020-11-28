const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin3;
var paper;
var ground;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(width/2,660,width,20);
	paper = new Paper(200,450,70);
	bin3 = new Dustbin(1200,640);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");
  Engine.update(engine);
 
paper.display();
ground.display();
bin3.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-275});
	}
  }

