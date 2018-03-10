var canvas = document.querySelector('canvas')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext('2d');


c.fillStyle='red';
c.fillRect(20, 100, 10, 10)



function Circle(x,y,radius,dx,dy){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;

    this.draw=function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.strokeStyle='blue';
        c.stroke();
    }

    this.update=function(){
        if( this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx=-this.dx;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy=-this.dy
        }
        this.y+=this.dy; 
        this.x+=this.dx;

        this.draw()
    }

}

var circleArray = [];
for(var i = 0; i<100; i++){
    var radius=20;
    var x = Math.random() * (innerWidth - radius * 2 ) + radius;
    var y = Math.random() * (innerHeight - radius * 2 ) + radius;   
    var dx = Math.random()-.5*4;
    var dy = Math.random()-.5*4;
    circleArray.push(new Circle(x, y, radius, dx, dy))
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight)

    for (var i =0; i<circleArray.length; i++){
        circleArray[i].update();
    }

}
animate();