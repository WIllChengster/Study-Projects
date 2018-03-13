var canvas = document.querySelector('canvas')

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
var c = canvas.getContext('2d');


c.fillStyle='red';
c.fillRect(20, 100, 10, 10)



function Circle(x,y,radius,dx,dy, m){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;
    this.m=m;

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
        for (var i =0; i<circleArray.length; i++){
            if( this === circleArray[i]){
                continue;
            } else if (distance(this.x, this.y, circleArray[i].x, circleArray[i].y) - radius*2 <0 ){
                
                circleArray[i].dx = -circleArray[i].dx;
                circleArray[i].dy = -circleArray[i].dy;
                circleArray[i].x += circleArray[i].dx;
                circleArray[i].y += circleArray[i].dy;
                this.dx=-this.dx;
                this.dy=-this.dy;

                // circleArray[i].dx = -conserveEnergy(circleArray[i].m, circleArray[i].dx, this.m, this.dx) ;
                // circleArray[i].dy = -conserveEnergy(circleArray[i].m, circleArray[i].dy, this.m, this.dy);
                // circleArray[i].x += circleArray[i].dx;
                // circleArray[i].y += circleArray[i].dy;

                // this.dx = -conserveEnergy( this.m, this.dx, circleArray[i].m, circleArray[i].dx );
                // this.dy = -conserveEnergy( this.m, this.dy, circleArray[i].m, circleArray[i].dy );

            }
        }


        this.y += this.dy; 
        this.x += this.dx;

        this.draw()
    }

}



function conserveEnergy( m1, v1, m2, v2 ){

    var vel =  (v1*(m1-m2)+2*m2*v2)/(m1+m2);
    return vel
}

function distance(element1_x, element1_y, element2_x, element2_y){
    var d = Math.sqrt(((element2_x - element1_x)**2) + ((element2_y - element1_y)**2));
    return d
}

var circleArray = [];
for(var i = 0; i<20; i++){
    var radius=50;
    var x = Math.random() * (innerWidth - radius * 2 ) + radius;
    var y = Math.random() * (innerHeight - radius * 2 ) + radius;
    if (i!==0){
        for(var j=0; j<circleArray.length; j++ ){
            if ( distance(x, y, circleArray[j].x, circleArray[j].y) - radius*2 < 1 ){
                x = Math.random() * (innerWidth - radius * 2 ) + radius;
                y = Math.random() * (innerHeight - radius * 2 ) + radius;

                j=-1
            }
        }
    }
    var dx = (Math.random()-.5)*4;
    var dy = (Math.random()-.5)*4;
    var m = 1;
    circleArray.push(new Circle(x, y, radius, dx, dy, m))
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth, innerHeight)

    for (var i =0; i<circleArray.length; i++){
        circleArray[i].update();
    }

}
animate();