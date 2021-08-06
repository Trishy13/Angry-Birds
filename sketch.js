const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld, myEngine, bg;

function preload(){
    bg = loadImage("bg.png")
}

function setup(){
createCanvas(1200,600);

myEngine = Engine.create();
myWorld = myEngine.world;

ground = new Ground(600,590,1200,20);
bird = new Bird(200,200);
platform = new Ground(200,460,400,250);

box1 = new Box(800,536);
box2 = new Box(1000,536);
pig1 = new Pig(900,536);
log1 = new Log(900,484,300,PI/2);

box3 = new Box(800,431);
box4 = new Box(1000,431);
pig2 = new Pig(900,431);
log2 = new Log(900,378,300,PI/2);

box5 = new Box(900,325);
log3 = new Log(1000,300,150,3*PI/4);
log4 = new Log(810,300,150,-3*PI/4);

sling = new Slingshot(bird.body,{x:150,y:250})

}

function draw(){
    Engine.update(myEngine);
    background(bg);

    ground.display();
    platform.display();
    box1.display();
    box2.display();
    pig1.display();
    bird.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
    box5.display();
    sling.display();

}
