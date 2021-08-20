class Pig extends Base{

    constructor(x,y){

        super(x,y,75,75);
        this.image = loadImage("enemy.png");
        this.visibility = 255;
    
    }

    display(){

        if(this.body.speed<2){

            super.display();
        }

        else{

            World.remove(myWorld,this.body)
            push();
            this.visibility = this.visibility-5;
            tint(255,this.visibility);
            image(this.image,this.body.position.x,this.body.position.y,75,75);
            pop();
        }

       
    }

    scoreInc(){

        if(this.visibility < 0 && this.visibility > -1005){

            score++;
        }
    }
}
