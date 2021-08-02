const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;



var bgImage;
var ground1;
var paper1;
var dustbin1,dustbin1Image;
var ground1Sprite;
var forceLimiter = 1;
var logLeft;
var bgImage;
var bgSound1;
var paper1Sprite;


function preload(){
    dustbin1Image = loadImage("dustbingreen.png");
    bgImage1 = loadImage("bgImage2.png");


    bgSound1 = loadSound("bg sound.mp3");
   

}

function setup(){
createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;

bgSound1.play();
bgSound1.loop();


ground1 = new Ground(windowWidth/4,310,windowWidth,20);
ground1Sprite = createSprite(windowWidth/4,310,windowWidth,20);

paper1 = new Paper(windowWidth/20,120,20,20);

//dustbin1 = new Dustbin(windowWidth/2,260,100,200);
dustbin1Sprite = createSprite(windowWidth/2.1,180,100,200);
ground1Sprite.visible = false;
dustbin1Sprite.addImage(dustbin1Image);
dustbin1Sprite.scale = 0.6;

//paper1Sprite = createSprite(windowWidth/20,120,20,20);


//logLeft = new Log(510,180,155,PI/7);


}

function draw(){
    background(bgImage1);
    Engine.update(engine);

    gravity();
    
    ground1.display();
    paper1.display();
   // logLeft.display();
    
   // dustbin1.display();

   dustbin1Sprite.collide(ground1Sprite);

 
   fill(255,255,255);
   textSize(22);
   text("Press UP Arrow Key",230,-100);
   text("And Clean The Trash",230,-70);



   drawSprites();


   
}

function keyPressed(){


    if(keyCode === UP_ARROW &&forceLimiter===1){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x :75,y:-160})
        forceLimiter  = 0;
    }
}

function gravity(){
    dustbin1Sprite.velocityY = dustbin1Sprite.velocityY+0.7;
   

}