class Ball{
    constructor(x,y,radius){
        var options={
            'friction': 0.5,
            'restitution':0.8
        }
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        ellipseMode(RADIUS);
        fill("orange");
        noStroke();
        ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}