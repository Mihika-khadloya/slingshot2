class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length:0.8
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
         strokeWeight(3);
         stroke("red");
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
    
}