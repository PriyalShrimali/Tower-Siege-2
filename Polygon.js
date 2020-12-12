class Polygon {
    constructor(x,y,radius){

        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density:1.2
        }
        this.radius=radius;
        this.body=Bodies.circle(50,200,20);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
      rect(this.body.position.x, this.body.position.y, 40, 40);
    }
    
}