class Slingshot{

    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:15
        
        }

        this.pointB = pointB;
        this.im1 = loadImage("sling1.png");
        this.im2 = loadImage("sling2.png");
        this.im3 = loadImage("sling3.png");
        this.sling = Constraint.create(options);
        World.add(myWorld,this.sling);
    }

    fly(){

        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body
    }

    display(){

        image(this.im1,300,136);
        image(this.im2,270,136);

        if(this.sling.bodyA){
        
        var posA = this.sling.bodyA.position;
        var posB = this.sling.pointB;

        push();
        stroke(0);

        if(posA.x<250){

            strokeWeight(6);
            line(posA.x-20,posA.y,posB.x-10,posB.y);
            line(posA.x-20,posA.y,posB.x+30,posB.y-3);
            image(this.im3,posA.x-30,posA.y-10,15,30);
        }

        else{

            strokeWeight(3);
            line(posA.x+25,posA.y,posB.x-10,posB.y);
            line(posA.x+25,posA.y,posB.x+30,posB.y-3);
            image(this.im3,posA.x+25,posA.y-10,15,30);
        }
        
        pop();
    }
    }
}