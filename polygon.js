class Poly{
    constructor(x,y,radius){
        var options = {
            'isStatic':false,
            'restitution':1.0,
            'friction':1.2,
            'density':1
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop()
    }
}