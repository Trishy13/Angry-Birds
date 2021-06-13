class Ground{

    constructor(x,y,w,h){
      
        var abc = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,w,h,abc);
        this.w = w;
        this.h = h;
        World.add(myWorld, this.body);
    }

    display(){

        var pos = this.body.position;

        push();
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}