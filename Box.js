class Box {
    constructor(x, y){
      var options={
        restitution: 0,
        friction: 0
      }
  
      this.body = Matter.Bodies.rectangle(x, y, 40, 40,options);
  
      World.add(world, this.body);
    }
  
    display(){
      fill("green");
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, 40, 40);
    }
  }