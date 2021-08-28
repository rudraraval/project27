class Rope{
 consturctor(body1, body2, xOffset, yOffset){
    this.xOffset= xOffset;
    this.yOffset= yOffset;
    var options={ bodyA:body1,
         bodyB:body2, 
         pointB:{x:this.xOffset, y:this.yOffset} }
         this.rope= Constraint.create(options)
         World.add(world, this.rope)
}

display(){
    var pointA= this.rope.bodyA.position
    var pointB= this.rope.bodyB.position
   strokeWeight(3)
    var X1= pointA.x
    var Y1= pointA.y
    var X2= pointB.x + this.xOffset
    var Y2= pointB.y + this.yOffset
    line(X1, Y1, X2, Y2)

}
}