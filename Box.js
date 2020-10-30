class Box {
    constructor(x,y,width,height){
        var line_options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,height,line_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
}