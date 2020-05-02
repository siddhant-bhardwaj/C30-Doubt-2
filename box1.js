class Box1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.2,
          'density':0.4
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
     this.Visiblility = 255;
      World.add(world, this.body);
    }

 



    display(){
     console.log(this.body);
      if(this.body.speed<3){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
       // strokeWeight(4);
        //stroke("green");
        fill("yellow");
       // fill(255);
        rect(0, 0, this.width, this.height);
        
        pop();
      }

else{
 
World.remove(world,this.body);
//this.body.visible=false;
score= score+1;

push();
this.Visiblity = this.Visiblity - 5;
tint(255,this.Visiblity);
image( this.body.position.x, this.body.position.y, 50, 50);
pop();
}


}
score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }   

    }
  
}