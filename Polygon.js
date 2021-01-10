class Polygon
{
    constructor(x,y,r)
    {
        

        
        
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            frictionAir:0.000000000001,
            density:8
    
    }



this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x, this.y, this.r/1.5, options)

World.add(world, this.body);


this.image = loadImage("polygon.png");


}
display()
{
    
    var polygonpos=this.body.position;

    push()
    translate(polygonpos.x, polygonpos.y);
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image, 0,0, this.x=70, this.y=70, this.r= 0.00000000000000000000000000000000001)
    ellipseMode(RADIUS)
    strokeWeight(3);
    fill("orange")
    ellipse(0,0,this.r, this.r);
    pop()
    
    }


}
