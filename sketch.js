const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld, myEngine;

function setup(){
createCanvas(1000,600);

myEngine = Engine.create();
myWorld = myEngine.world;



ground = new Ground(500,590,1000,20);

box1 = Bodies.rectangle(300,200,50,100);
World.add(myWorld, box1);

box2 = Bodies.rectangle(350,100,130,50);
World.add(myWorld, box2);
}

function draw(){
    Engine.update(myEngine);
    background("blue");

    ground.display();

    

    fill("red");
    rect(box1.position.x,box1.position.y,50,100);

    fill("yellow");
    rect(box2.position.x,box2.position.y,130,50);
}
