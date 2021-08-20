class Bird extends Base{

    constructor(x,y){

        super(x,y,60,60);
        this.image = loadImage("bird.png");
        this.trajectory = [];
        this.img = loadImage("smoke.png");

    
    }

    display(){

        super.display();

        if(this.body.velocity.x>10 && this.body.position.x>350){
            var position = [this.body.position.x,this.body.position.y];
            this.trajectory.push(position);
        }
       

        for(var i = 0; i<this.trajectory.length; i++){
            image(this.img,this.trajectory[i][0],this.trajectory[i][1]);
        }

    }
}