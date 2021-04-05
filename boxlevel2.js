class Box2{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity = 225
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed<3){
          push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("lightblue");
        rect(0,0,this.width,this.height);
        pop();
        }else{
          World.remove(world,this.body);
          push();
          this.visiblity = this.visiblity - 5
          tint(225,this.visiblity);
          pop();
        }
      }

      score(){
        if(this.visiblity<0 && this.visiblity>= -1005){
          score++;
        }
      }
}