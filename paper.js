// class Paper{
//     constructor(x,y,width,height,angle){
//         this.body = Bodies.rectangle(x,y,width,height,angle);
//         this.width = width;
//         this.height = height;
//         World.add(world,this.body);


//     }

//     display(){
//         var angle = this.body.angle;
//         var pos = this.body.position;

//         push();
//         translate(pos.x,pos.y)
//         rectMode(CENTER);
//         rotate(angle);
//         rect(pos.x,pos.y,this,width,this,height);
//         pop();

//     }
// }

class Paper extends BaseClass{
    constructor(x,y){
      super(x,y,50,50);
      this.image = loadImage("paper.png");
    }
    display(){
      
      super.display();
    }
  }






