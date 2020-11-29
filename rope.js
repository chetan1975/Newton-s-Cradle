class rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
    }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
            push()
            strokeWeight(4);
            stroke(255);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
}