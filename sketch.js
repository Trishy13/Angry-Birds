const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

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

box1 = new Box(800,536);
box2 = new Box(1000,536);
pig1 = new Pig(900,536);

}

function draw(){
    Engine.update(myEngine);
    background(bg);

    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    bird.display();

}
