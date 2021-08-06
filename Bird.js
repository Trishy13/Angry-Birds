class Bird extends Base{

    constructor(x,y){

        super(x,y,60,60);
        this.image = loadImage("bird.png");

    
    }

    display(){

        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}