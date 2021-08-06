class Slingshot{

    constructor(bodyA,pointB){

        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:15
        
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(myWorld,this.sling);
    }

    display(){

        var posA = this.sling.bodyA.position;
        var posB = this.sling.pointB;

        push();
        stroke(0);
        strokeWeight(6);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
    }
}