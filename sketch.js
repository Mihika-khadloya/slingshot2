const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var engine;
var world;
var base;
var box1,box2,box3;
var bo1,bo2;
var box;
var ball;
var chain;


 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    
    base = new Base(310,215,120,15);
    box1 = new Boxes(310,200);
    box2 = new Boxes(335,200);
    box3 = new Boxes(285,200);

    bo1 = new Boxes(297,135);
    bo2 = new Boxes(323,135);

    box = new Boxes(310,100);
    ball = new Ball(60,300,15);
    chain = new Chain(ball.body,{x:50,y:300});

}

 

 
function draw(){
    Engine.update(engine);
    background("black");

    
    
   base.display();
   box1.display();
   box2.display();
   box3.display();

   bo1.display();
   bo2.display();

   box.display();
   ball.display();
   chain.display();
  
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
}
function mouseReleased(){
    chain.fly();
}
    