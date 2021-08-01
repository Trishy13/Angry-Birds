class Base{

    constructor(x,y,w,h,angle){
        
        var options = {
            restitution:1,
            friction:2,
            density:1
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("base.png");
        World.add(myWorld,this.body);
    }

    display(){

        var posi = this.body.position;
        var angle = this.body.angle;

        push();
        translate(posi.x,posi.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}