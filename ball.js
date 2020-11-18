class ball{
    constructor(x,y){
        var options={
            isStatic:false,
            friction:0.5,
            density:1.5,
            restitution:0.5,
        } 
        this.body=Bodies.circle(x,y,20,options)
        this.x=x 
        this.y=y
        this.radius=20
       
        World.add(world,this.body)
    }
    display(){
        push()
            translate(this.body.position.x,this.body.position.y)
            ellipseMode(CENTER);
        fill("white");
        ellipse(0,0,this.radius,this.radius);
        pop()
        
}}