const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2,ground3;
var box1,box2,box3,box4,box5;
var box6,box7,box8;
var box9;
var box_1,box_2,box_3,box_4,box_5;
var box_6,box_7,box_8;
var box_9;
var polygon;
function setup(){
    var canvas = createCanvas(1200,400);
    gamestate = "onsling";
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(800, 180, 200, 10);
    ground2 = new Ground(500, 250, 200, 10);
    ground3 = new Ground(600, 395, 1200, 10)

    box1 = new Box(800,150);
    box2 = new Box(760,150);
    box3 = new Box(720,150);
    box4 = new Box(840,150);
    box5 = new Box(880,150);
    box6 = new Box(800,110);
    box7 = new Box(840,110);
    box8 = new Box(760,110);
    box9 = new Box(800,70);

    box_1 = new Box(500,230);
    box_2 = new Box(540,230);
    box_3 = new Box(460,230);
    box_4 = new Box(420,230);
    box_5 = new Box(580,230);
    box_6 = new Box(500,190);
    box_7 = new Box(540,190);
    box_8 = new Box(460,190);
    box_9 = new Box(500,150);

    polygon = new Polygon(100,150);
    slingshot = new Sling(polygon.body,{x:100, y:220});	

}

function draw(){
    background("blue");
    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box_1.display();
    box_2.display();
    box_3.display();
    box_4.display();
    box_5.display();
    box_6.display();
    box_7.display();
    box_8.display();
    box_9.display();

    polygon.display();
    slingshot.display();
}

function keyPressed(){
	if(keyCode === 32 && gamestate === "launched"){
		gamestate = "onsling";
		Matter.Body.setPosition(polygon.body,{x:100, y:220});
		Matter.Body.setVelocity(polygon.body, {x:0, y:0});
		slingshot.attach(polygon.body);
	}
}

function mouseDragged(){
    if(gamestate !== "launched"){
           Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gamestate = "launched"
}