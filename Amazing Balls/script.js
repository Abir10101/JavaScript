let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
class Ball {
    constructor(x, y, velx, vely, size, color) {
        this.x = x;
        this.y = y;
        this.velx = velx;
        this.vely = vely;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velx = -(this.velx);
        }
        if ((this.x - this.size) <= 0) {
            this.velx = -(this.velx);
        }
        if ((this.y + this.size) >= height) {
            this.vely = -(this.vely);
        }
        if ((this.y - this.size) <= 0) {
            this.vely = -(this.vely);
        }
        this.x += this.velx;
        this.y += this.vely;
    }
    collision() {
        for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
                let dx = this.x - balls[j].x;
                let dy = this.y - balls[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
                    this.velx = -(this.velx);
                    this.vely = -(this.vely);
                    // balls[j].velx = -(balls[j].velx);
                    // balls[j].vely = -(balls[j].vely);
                }
            }
        }
    }
}

let balls = [];
while (balls.length < 15) {
    let size = random(15, 20);
    let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        size,
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')'
    );
    balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collision();
    }

    requestAnimationFrame(loop);
}

loop();
