
let totalFrames = 5;
let currentFrame = 0;
let framesDrawn = 0;

function animate() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const spriteNinja = new Image();
    spriteNinja.src = "./sprite.png";

    let cols = 5;
    let rows = 2;

    let spriteWidth = spriteNinja.width / cols;
    let spriteHeight = spriteNinja.height / rows;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    requestAnimationFrame(animate);
    
    currentFrame = currentFrame % totalFrames;
    let srcX = currentFrame * spriteWidth;
    ctx.save();
    ctx.drawImage(spriteNinja, srcX, 0, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    framesDrawn++;
    if(framesDrawn >= 10){
        currentFrame++;
        framesDrawn = 0;
    }
}

animate();