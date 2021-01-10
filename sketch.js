const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint


var polygon
var rope
var stand
var block
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14
// var block15



function preload()
{
	
}

function setup() {
	createCanvas(1440, 740);


    
    
    
    
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	polygon = new Polygon(200,300,50)
	rope = new Rope(polygon.body,{x:200,y:300})
	stand = new Stand(609,400,300,20)
	block = new Block(500,364,50,50)
	block2 = new Block2(554,364,50,50)
	block3 = new Block(608,364,50,50)
	block4 = new Block2(662,364,50,50)
	block5 = new Block(717,364,50,50)
	block6 = new Block2(527,304,50,50)
	block7 = new Block(582,304,50,50)
	block8 = new Block2(636,304,50,50)
	block9 = new Block(690,304,50,50)
	block10 = new Block(555,234,50,50)
	block11 = new Block2(609,234,50,50)
	block12 = new Block2(583,100,50,50)
	block13 = new Block(663,100,50,50)
	block14 = new Block(663,100,50,50)
	// block15 = new Block(663,100,50,50)









	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  

polygon.display();
rope.display();
stand.display();
block.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
// block15.display();
// block16.display();
// block17.display();
// block18.display();
// block19.display();
// block20.display();

  
 
}



function mouseDragged(){
	if(rope.attach){
		Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
	}
}
	
	
	function mouseReleased(){
	rope.fly()
	}



