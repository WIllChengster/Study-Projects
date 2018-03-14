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
                this.dx= -this.dx;
                this.dy= -this.dy;

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

function rotate(velocity, angle){
    var rotatedVelocities={
        x: velocity.x * math.cos(angle) - velocity.y * math.sin(angle),
        y: velocity.y* math.sin(angle) + velocity.y * math.cos(angle)
    }
}

function resolveCollision(particle, otherParticle) {
    
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
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