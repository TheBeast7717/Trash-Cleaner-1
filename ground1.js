class Ground{
    constructor(x,y,width,height){
       var groundOptions = {
            isStatic:true,
            render:{visible:false}

        }
        

        this.body = Bodies.rectangle(x,y,width,height,groundOptions);
        this.width = width;
        this.height = height;
        this.image = loadImage("base.png");
        World.add(world,this.body);
        

    }

    display(){
        var pos = this.body.position;
        translate(pos.x,pos.y);
        fill(176, 132, 51);
        rectMode(CENTER);
        
        rect(pos.x,pos.y,this.width,this.height);

    }



}