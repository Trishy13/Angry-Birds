class Log extends Base{

    constructor(x,y,h,angle){

        super(x,y,20,h,angle);
        Matter.Body.setAngle(this.body,angle);
        this.image = loadImage("wood2.png");
    }

    display(){

        super.display();
    }
}