const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myWorld, myEngine, bg, bk, gs = "onsling";

function preload(){
    
    getTime();
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
pig2 = new Pig(900,435);
log2 = new Log(900,378,300,PI/2);

box5 = new Box(900,325);
log3 = new Log(1000,300,150,3*PI/4);
log4 = new Log(810,300,150,-3*PI/4);

sling = new Slingshot(bird.body,{x:295,y:170})

}

function draw(){
    Engine.update(myEngine);

    if(bk){
        background(bk);
    }
    else{
        background("lightblue")
    }
    
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

function keyPressed(){
    if(keyCode === 32){
       sling.attach(bird.body);
    }
 
 }

function mouseDragged(){

    if(gs != "launch"){
        Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
    }

    
}

function mouseReleased(){

    sling.fly();
    gs = "launch";
}

async function getTime(){

    var res = await fetch("http://worldclockapi.com/api/json/est/now");
    var resj = await res.json();
    var dt = resj.currentDateTime;
    var hr = dt.slice(11,13)
    console.log(hr);

    if(hr>=06 && hr<=18){

        bg = "bg.png";
    }

    else{

        bg = "night.jpg"
    }

    bk = loadImage(bg);
}
