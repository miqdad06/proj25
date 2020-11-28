class Dustbin {
  constructor(x,y) {
  var options = {
      isStatic:true
  }
  this.width=200;
  this.height=213;
  this.thickness=20;
  this.image = loadImage("dustbingreen.png");
  this.leftbody=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
  this.rightbody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
  this.bottombody = Bodies.rectangle(x,y,this.width,this.thickness,options);
  
  World.add(world,this.bottombody);
  World.add(world,this.leftbody);
  World.add(world,this.rightbody);
}
display(){
  var posbottom=this.bottombody.position;
  var posright = this.rightbody.position;
  var posleft = this.leftbody.position;
  
  push();
  translate(posleft.x,posleft.y);
  rectMode(CENTER);
  fill(255);
  rotate(this.angle);
  pop()

  push()
  translate(posright.x,posright.y);
  rectMode(CENTER);
  fill(255);
  pop()

  push()
  translate(posbottom.x,posbottom.y+10)
  rectMode(CENTER)
  fill(255);
  imageMode(CENTER);
  image(this.image,0,-this.height/2,this.width,this.height);
  pop();
}
}
