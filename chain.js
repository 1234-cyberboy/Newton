class Chain{
    constructor(body1, body2, ofsetX, ofsetY){
     this.ofsetX = ofsetX;
     this.ofsetY = ofsetY;
     
        var options = {
         bodyA:body1,
         bodyB:body2
        }
    
    this.chain = Constraint.create(options)
    World.add(world, this.chain)
    
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
      strokeWeight(5);
      line(pointA.x, pointA.y, pointA.x+this.ofsetX, pointB.y+this.ofsetY);
    }
}